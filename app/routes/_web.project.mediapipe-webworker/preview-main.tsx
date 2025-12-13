import { CodeRenderer } from "~/components/code-renderer";
import { useStore } from "./store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { SettingsIcon } from "lucide-react";
import { SelectInputDevice } from "~/layouts/select-input-video-device";

export function PreviewMain() {
  const state = useStore((state) => ({
    inputVideoDevice: state.inputVideoDevice,
    interferenceDelegate: state.interferenceDelegate,
    modelType: state.modelType,
    shouldEnableSegmentationMask: state.shouldEnableSegmentationMask,
    numPoses: state.numPoses,
    minimumPoseConfidence: state.minimumPoseConfidence,
    minimumPosePresenceConfidence: state.minimumPosePresenceConfidence,
    minimumTrackingConfidence: state.minimumTrackingConfidence,
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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <SettingsIcon />
              Model parameters
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="p-0 outline-0 w-full max-w-[calc(100vw-2rem)]"
          >
            <CodeRenderer
              language="json"
              children={JSON.stringify(state, null, 2)}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="text-muted-foreground py-4">Page under construction.</div>
    </div>
  );
}
