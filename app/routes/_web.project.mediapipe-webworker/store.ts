import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

import { TInterferenceDelegate, TModelType } from "./types";
import { TInputVideoDevice } from "~/layouts/select-input-video-device";

export type TUseMediapipeInWorkerState = {
  interferenceDelegate: TInterferenceDelegate;
  modelType: TModelType;
  inputVideoDevice: TInputVideoDevice;
  shouldEnableSegmentationMask: boolean;
  numPoses: number;
  minimumPoseConfidence: number;
  minimumPosePresenceConfidence: number;
  minimumTrackingConfidence: number;
};

export type TUseMediapipeInWorkerActions = {
  setInterferenceDelegate: (delegate: TInterferenceDelegate) => void;
  setModelType: (type: TModelType) => void;
  setInputVideoDevice: (device: TInputVideoDevice) => void;
  setShouldEnableSegmentationMask: (value: boolean) => void;
  setNumPoses: (value: number) => void;
  setMinimumPoseConfidence: (value: number) => void;
  setMinimumPosePresenceConfidence: (value: number) => void;
  setMinimumTrackingConfidence: (value: number) => void;
};

export const useStore = createWithEqualityFn<
  TUseMediapipeInWorkerState & TUseMediapipeInWorkerActions
>(
  (set) => ({
    interferenceDelegate: "GPU",
    modelType: "Lite",
    inputVideoDevice: {
      id: "",
      label: "",
    },
    shouldEnableSegmentationMask: false,
    numPoses: 1,
    minimumPoseConfidence: 0.5,
    minimumPosePresenceConfidence: 0.5,
    minimumTrackingConfidence: 0.5,
    setInterferenceDelegate: (delegate: TInterferenceDelegate) =>
      set({ interferenceDelegate: delegate }),
    setModelType: (type: TModelType) => set({ modelType: type }),
    setInputVideoDevice: (device: { id: string; label: string }) =>
      set({ inputVideoDevice: device }),
    setShouldEnableSegmentationMask: (value: boolean) =>
      set({ shouldEnableSegmentationMask: value }),
    setNumPoses: (value: number) => set({ numPoses: value }),
    setMinimumPoseConfidence: (value: number) =>
      set({ minimumPoseConfidence: value }),
    setMinimumPosePresenceConfidence: (value: number) =>
      set({ minimumPosePresenceConfidence: value }),
    setMinimumTrackingConfidence: (value: number) =>
      set({ minimumTrackingConfidence: value }),
  }),
  shallow,
);
