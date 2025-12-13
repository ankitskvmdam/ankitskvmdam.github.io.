import { Button } from "~/components/ui/button";
import { Field, FieldLabel } from "~/components/ui/field";
import { Slider } from "~/components/ui/slider";

export type TParameterSliderProps = {
  defaultValue: number;
  onValueCommit: (value: number) => void;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
};

export function ParameterSlider(props: TParameterSliderProps) {
  const { defaultValue, onValueCommit, label, value, min, max, step } = props;

  return (
    <Field>
      <FieldLabel>
        {label}{" "}
        <span className="text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
          {value}
        </span>
      </FieldLabel>
      <div className="flex gap-x-2">
        <Button size="icon-sm" variant="ghost" disabled>
          {min}
        </Button>
        <Slider
          defaultValue={[defaultValue]}
          min={min}
          max={max}
          step={step}
          onValueCommit={(value) => onValueCommit(value[0])}
        />
        <Button size="icon-sm" variant="ghost" disabled>
          {max}
        </Button>
      </div>
    </Field>
  );
}
