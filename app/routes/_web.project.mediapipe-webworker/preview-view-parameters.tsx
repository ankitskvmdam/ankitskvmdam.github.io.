import { CodeRenderer } from "~/components/code-renderer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Eye } from "lucide-react";
import { useMediapipeInputs } from "~/layouts/mediapipe-inputs/store";

export function PreviewViewParameters() {
  const state = useMediapipeInputs((state) => ({
    inputVideoDevice: state.inputVideoDevice,
    interferenceDelegate: state.interferenceDelegate,
    modelType: state.modelType,
    shouldEnableSegmentationMask: state.shouldEnableSegmentationMask,
    numPoses: state.numPoses,
    minimumPoseConfidence: state.minimumPoseConfidence,
    minimumPosePresenceConfidence: state.minimumPosePresenceConfidence,
    minimumTrackingConfidence: state.minimumTrackingConfidence,
  }));

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
          children={JSON.stringify(state, null, 2)}
        />
      </PopoverContent>
    </Popover>
  );
}
