import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "~/components/ui/field";
import { useStore } from "./store";
import { ParameterSelect } from "~/layouts/parameter-select";
import { Switch } from "~/components/ui/switch";
import { ParameterSlider } from "~/layouts/parameter-slider";
import { ExternalLink } from "lucide-react";

export function Inputs() {
  const state = useStore((state) => state);

  return (
    <form>
      <FieldGroup className="text-sm">
        <FieldSet>
          <FieldLegend>
            Model Parameters
            <FieldDescription>
              See&nbsp;
              <a
                className="text-anchor gap-x-0.5 no-underline! items-center inline-flex [&>svg]:size-4"
                target="_blank"
                href="https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#configurations_options"
              >
                documentation
                <ExternalLink />
              </a>
              &nbsp; for more details.
            </FieldDescription>
          </FieldLegend>
          <FieldGroup>
            <ParameterSelect
              label="Interference delegate"
              placeholder="Select a delegate"
              defaultValue={state.interferenceDelegate}
              onValueChange={state.setInterferenceDelegate}
              options={[
                {
                  label: "CPU",
                  value: "CPU",
                },
                {
                  label: "GPU",
                  value: "GPU",
                },
              ]}
            />
            <ParameterSelect
              label="Model"
              placeholder="Select model"
              defaultValue={state.modelType}
              onValueChange={state.setModelType}
              options={[
                {
                  label: "Pose Landmarker Heavy",
                  value: "Heavy",
                },
                {
                  label: "Pose Landmarker Full",
                  value: "Full",
                },
                {
                  label: "Pose Landmarker Lite",
                  value: "Lite",
                },
              ]}
            />
            <Field>
              <div className="flex items-center gap-x-2">
                <Switch
                  checked={state.shouldEnableSegmentationMask}
                  onCheckedChange={state.setShouldEnableSegmentationMask}
                  id="segmentation-mask"
                />
                <label htmlFor="segmentation-mask">Segmentation Mask</label>
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldGroup>
            <ParameterSlider
              label="Number of poses to detect"
              min={1}
              max={5}
              step={1}
              value={state.numPoses}
              onValueCommit={state.setNumPoses}
              defaultValue={state.numPoses}
            />
            <ParameterSlider
              label="Minimum pose detection confidence"
              min={0.1}
              max={0.9}
              step={0.1}
              value={state.minimumPoseConfidence}
              onValueCommit={state.setMinimumPoseConfidence}
              defaultValue={state.minimumPoseConfidence}
            />
            <ParameterSlider
              label="Minimum pose presence confidence"
              min={0.1}
              max={0.9}
              step={0.1}
              value={state.minimumPosePresenceConfidence}
              onValueCommit={state.setMinimumPosePresenceConfidence}
              defaultValue={state.minimumPosePresenceConfidence}
            />
            <ParameterSlider
              label="Minimum tracking confidence"
              min={0.1}
              max={0.9}
              step={0.1}
              value={state.minimumTrackingConfidence}
              onValueCommit={state.setMinimumTrackingConfidence}
              defaultValue={state.minimumTrackingConfidence}
            />
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
