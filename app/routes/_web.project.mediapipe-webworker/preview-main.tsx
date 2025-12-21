import { useStore } from "./store";
import { SelectInputDevice } from "~/layouts/select-input-video-device";
import { PreviewViewParameters } from "./preview-view-parameters";
import { PreviewUpdateParamters } from "./preview-update-parameters";
import { PreviewRunner } from "./preview-runner";

export function PreviewMain() {
  const state = useStore((state) => ({
    inputVideoDevice: state.inputVideoDevice,
    setInputVideoDevice: state.setInputVideoDevice,
  }));

  return (
    <div>
      <div className="flex justify-between gap-x-2">
        <div>
          <SelectInputDevice
            inputVideoDevice={state.inputVideoDevice}
            onValueChange={state.setInputVideoDevice}
          />
        </div>
        <PreviewViewParameters />
        <PreviewUpdateParamters />
      </div>

      <div className="text-muted-foreground py-4">
        <PreviewRunner />
      </div>
    </div>
  );
}
