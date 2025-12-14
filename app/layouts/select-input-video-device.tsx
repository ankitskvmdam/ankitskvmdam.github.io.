import React from "react";
import { Button } from "~/components/ui/button";
import { ParameterSelect } from "~/layouts/parameter-select";

export type TInputVideoDevice = {
  id: string;
  label: string;
};

export type TSelectInputVideoDevice = {
  onValueChange: (value: TInputVideoDevice) => void;
  inputVideoDevice: TInputVideoDevice;
};

export function SelectInputDevice(props: TSelectInputVideoDevice) {
  const { onValueChange, inputVideoDevice } = props;
  const [options, setOptions] = React.useState(
    [] as { label: string; value: string }[],
  );

  const updateOptions = React.useCallback(async () => {
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
        setOptions(options);

        if (options.length > 0) {
          onValueChange({
            id: options[0].value,
            label: options[0].label,
          });
        }

        stream.getTracks().forEach((track) => track.stop());
      });
  }, []);

  const handleOnValueChange = React.useCallback(
    (value: string) => {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        onValueChange({
          id: selectedOption.value,
          label: selectedOption.label,
        });
      }
    },
    [options, onValueChange],
  );

  React.useEffect(() => {
    updateOptions();
  }, [updateOptions]);

  if (options.length === 0) {
    return <div>Please allow access to your camera.</div>;
  }

  return (
    <ParameterSelect
      onValueChange={handleOnValueChange}
      value={inputVideoDevice.id}
      options={options}
      placeholder="Select input device"
    />
  );
}
