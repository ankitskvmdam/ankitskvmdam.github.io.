import React from "react";
import { Loader2 } from "lucide-react";
import { StreamContainer } from "~/layouts/containers";
import { StreamVideoPlayer } from "~/layouts/stream-video-player";
import { usePoseLandmarker } from "./use-pose-landmarker";

export type TPreviewRunnerViewProps = {
  stream: MediaStream;
};

export function PreviewRunnerView(props: TPreviewRunnerViewProps) {
  const { stream } = props;

  const [video, setVideo] = React.useState<HTMLVideoElement | null>(null);
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);

  const { status, error, fps } = usePoseLandmarker({ video, canvas });

  return (
    <StreamContainer>
      <div className="relative h-full w-full">
        <StreamVideoPlayer stream={stream} onVideoReady={setVideo} />

        {/*
          Mirrored just like the video, so the landmarks line up with what the
          user sees.
        */}
        <canvas
          ref={setCanvas}
          className="pointer-events-none absolute inset-0 h-full w-full -scale-x-100 rounded-lg"
        />

        <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1.5 text-xs text-white backdrop-blur-sm">
          {status === "loading" && (
            <span className="inline-flex items-center gap-x-2">
              <Loader2 className="size-3.5 animate-spin" />
              Loading model in the web worker
            </span>
          )}

          {status === "ready" && (
            <span className="inline-flex items-center gap-x-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              Web worker &middot; {fps} FPS
            </span>
          )}

          {status === "error" && (
            <span className="text-red-400">
              {error ?? "Unable to run the pose landmarker"}
            </span>
          )}
        </div>
      </div>
    </StreamContainer>
  );
}
