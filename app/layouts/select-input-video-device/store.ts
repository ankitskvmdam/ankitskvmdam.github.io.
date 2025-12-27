import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

export type TInputDevice = {
  label: string;
  value: string;
};

export type TInputDeviceStoreState = {
  selectedInputDevice: TInputDevice;
  inputDevices: TInputDevice[];
};

export type TInputDeviceStoreActions = {
  setSelectedInputDevice: (device: TInputDevice) => void;
  setInputDevices: (devices: TInputDevice[]) => void;
};

export const useInputDevice = createWithEqualityFn<
  TInputDeviceStoreActions & TInputDeviceStoreState
>(
  (set) => ({
    selectedInputDevice: { label: "", value: "" },
    inputDevices: [],
    setSelectedInputDevice: (device: TInputDevice) =>
      set({ selectedInputDevice: device }),
    setInputDevices: (devices: TInputDevice[]) =>
      set({ inputDevices: devices }),
  }),
  shallow,
);
