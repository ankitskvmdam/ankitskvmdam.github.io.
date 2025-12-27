import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

export type TInterferenceDelegate = "GPU" | "CPU";
export type TMediapipeModelType = "Heavy" | "Lite" | "Full";

export type TMediapipeInputs = {
  interferenceDelegate: TInterferenceDelegate;
  modelType: TMediapipeModelType;
  shouldEnableSegmentationMask: boolean;
  numPoses: number;
  minimumPoseConfidence: number;
  minimumPosePresenceConfidence: number;
  minimumTrackingConfidence: number;
};

export type TMediapipeInputsActions = {
  setInterferenceDelegate: (delegate: TInterferenceDelegate) => void;
  setModelType: (type: TMediapipeModelType) => void;
  setShouldEnableSegmentationMask: (value: boolean) => void;
  setNumPoses: (value: number) => void;
  setMinimumPoseConfidence: (value: number) => void;
  setMinimumPosePresenceConfidence: (value: number) => void;
  setMinimumTrackingConfidence: (value: number) => void;
};

export const useMediapipeInputs = createWithEqualityFn<
  TMediapipeInputs & TMediapipeInputsActions
>(
  (set) => ({
    interferenceDelegate: "GPU",
    modelType: "Lite",
    shouldEnableSegmentationMask: false,
    numPoses: 1,
    minimumPoseConfidence: 0.5,
    minimumPosePresenceConfidence: 0.5,
    minimumTrackingConfidence: 0.5,
    setInterferenceDelegate: (delegate: TInterferenceDelegate) =>
      set({ interferenceDelegate: delegate }),
    setModelType: (type: TMediapipeModelType) => set({ modelType: type }),
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
