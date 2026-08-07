import type { TMediapipeInputs } from "~/layouts/mediapipe-inputs/store";

/**
 * The worker lives in `public/` and is loaded as a *classic* worker, because
 * `@mediapipe/tasks-vision` relies on `importScripts` internally.
 */
const WORKER_URL = "/mediapipe/poselandmarker.worker.js";

export type TPoseLandmarkerOptions = TMediapipeInputs;

export type TNormalizedLandmark = {
  x: number;
  y: number;
  z: number;
  visibility: number;
};

export type TPoseDetectionResult = {
  /** One entry per detected pose, each holding the 33 pose landmarks. */
  landmarks: TNormalizedLandmark[][];
  /**
   * Pre-tinted mask, only present when the segmentation mask parameter is on.
   * The caller owns it and must `close()` it once drawn.
   */
  segmentationMask: ImageBitmap | null;
};

type TWorkerResponse = {
  id: number;
  type: "init" | "update-options" | "detect" | "error";
  payload: Record<string, unknown>;
};

type TPendingRequest = {
  resolve: (payload: Record<string, unknown>) => void;
  reject: (error: Error) => void;
};

/**
 * Typed wrapper around the pose landmarker worker.
 *
 * The worker talks in `postMessage`/`onmessage`, which has no notion of a
 * request and its response. Tagging every message with an incrementing id and
 * parking a promise per id gives us a plain async API on this side, and keeps
 * concurrent requests from resolving each other.
 */
export class PoseLandmarkerWorkerClient {
  private worker: Worker;
  private pendingRequests = new Map<number, TPendingRequest>();
  private nextRequestId = 0;
  private isTerminated = false;

  constructor() {
    this.worker = new Worker(WORKER_URL);
    this.worker.addEventListener("message", this.handleMessage);
    this.worker.addEventListener("error", this.handleError);
  }

  private handleMessage = (event: MessageEvent<TWorkerResponse>) => {
    const { id, type, payload } = event.data;
    const pending = this.pendingRequests.get(id);

    if (!pending) return;
    this.pendingRequests.delete(id);

    if (type === "error") {
      pending.reject(new Error(String(payload.message)));
      return;
    }

    pending.resolve(payload);
  };

  private handleError = (event: ErrorEvent) => {
    this.rejectPendingRequests(
      new Error(event.message || "The pose landmarker worker crashed"),
    );
  };

  private rejectPendingRequests(error: Error) {
    for (const pending of this.pendingRequests.values()) {
      pending.reject(error);
    }

    this.pendingRequests.clear();
  }

  private request<TPayload>(
    type: TWorkerResponse["type"],
    payload: Record<string, unknown>,
    transfer: Transferable[] = [],
  ): Promise<TPayload> {
    if (this.isTerminated) {
      return Promise.reject(
        new Error("The pose landmarker worker has been terminated"),
      );
    }

    const id = this.nextRequestId++;

    return new Promise<TPayload>((resolve, reject) => {
      this.pendingRequests.set(id, {
        resolve: resolve as TPendingRequest["resolve"],
        reject,
      });

      this.worker.postMessage({ id, type, payload }, transfer);
    });
  }

  /**
   * Downloads the wasm fileset and the model, then builds the landmarker.
   * This is the slow part we moved off the main thread.
   */
  init(options: TPoseLandmarkerOptions) {
    return this.request<{ isSuccess: boolean }>("init", { options });
  }

  /**
   * Applies new parameters in place. The worker rebuilds the landmarker only
   * when the model or the delegate changed.
   */
  updateOptions(options: TPoseLandmarkerOptions) {
    return this.request<{ isSuccess: boolean }>("update-options", { options });
  }

  /**
   * The bitmap is transferred, so it is unusable on this side afterwards.
   * The worker closes it once the model is done with it.
   */
  async detect(image: ImageBitmap) {
    const { result } = await this.request<{ result: TPoseDetectionResult }>(
      "detect",
      { image },
      [image],
    );

    return result;
  }

  terminate() {
    this.isTerminated = true;
    this.rejectPendingRequests(
      new Error("The pose landmarker worker has been terminated"),
    );
    this.worker.terminate();
  }
}
