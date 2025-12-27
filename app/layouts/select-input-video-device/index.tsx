import React from "react";
import { ParameterSelect } from "~/layouts/parameter-select";
import { useInputDevice } from "./store";

export function SelectInputDevice() {
  const {
    inputDevices,
    selectedInputDevice,
    setInputDevices,
    setSelectedInputDevice,
  } = useInputDevice((state) => state);

  const syncInputDevices = React.useCallback(async () => {
    if (inputDevices.length !== 0 || selectedInputDevice.value !== "") {
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(async (stream) => {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(
          (device) => device.kind === "videoinput",
        );

        const options = videoDevices.map((device) => ({
          label: device.label,
          value: device.deviceId,
        }));

        // update input devices.
        setInputDevices(options);

        const firstTrackDeviceId = stream.getTracks()[0].getSettings().deviceId;
        if (selectedInputDevice.value !== firstTrackDeviceId) {
          // Only stopping track if it is not the same as the selected input device.
          stream.getTracks().forEach((track) => track.stop());
        }

        const _selectedDevice = options.find(
          (option) => option.value === firstTrackDeviceId,
        );
        setSelectedInputDevice(_selectedDevice || options[0]);
      });
  }, [setInputDevices, selectedInputDevice, setSelectedInputDevice]);

  const handleOnValueChange = React.useCallback(
    (value: string) => {
      const selectedOption = inputDevices.find(
        (device) => device.value === value,
      );
      if (selectedOption) {
        setSelectedInputDevice(selectedOption);
      }
    },
    [inputDevices, setSelectedInputDevice],
  );

  React.useEffect(() => {
    syncInputDevices();
  }, [syncInputDevices]);

  if (inputDevices.length === 0) {
    return <div>Please allow access to your camera.</div>;
  }

  return (
    <ParameterSelect
      onValueChange={handleOnValueChange}
      value={selectedInputDevice.value}
      options={inputDevices}
      placeholder="Select input device"
    />
  );
}
