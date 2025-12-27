import { CodeRenderer } from "~/components/code-renderer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Eye } from "lucide-react";
import { useMediapipeInputs } from "~/layouts/mediapipe-inputs/store";
import { useInputDevice } from "~/layouts/select-input-video-device/store";

export function PreviewViewParameters() {
  const state = useMediapipeInputs((state) => ({
    interferenceDelegate: state.interferenceDelegate,
    modelType: state.modelType,
    shouldEnableSegmentationMask: state.shouldEnableSegmentationMask,
    numPoses: state.numPoses,
    minimumPoseConfidence: state.minimumPoseConfidence,
    minimumPosePresenceConfidence: state.minimumPosePresenceConfidence,
    minimumTrackingConfidence: state.minimumTrackingConfidence,
  }));

  const inputVideoDevice = useInputDevice((state) => state.selectedInputDevice);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="hidden lg:inline-flex">
          <Eye />
          View parameters
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="p-0 outline-0 w-full max-w-[calc(100vw-2rem)]"
      >
        <CodeRenderer
          language="json"
          children={JSON.stringify({ inputVideoDevice, ...state }, null, 2)}
        />
      </PopoverContent>
    </Popover>
  );
}
