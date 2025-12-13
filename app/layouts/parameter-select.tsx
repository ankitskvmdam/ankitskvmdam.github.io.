import { Field, FieldLabel } from "~/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export type TParameterSelect<T extends string> = {
  label?: string;
  placeholder: string;
  options: { label: string; value: T }[];
  defaultValue?: T;
  value?: T;
  onValueChange: (value: T) => void;
};

export function ParameterSelect<T extends string>(props: TParameterSelect<T>) {
  const { label, placeholder, options, defaultValue, value, onValueChange } =
    props;

  return (
    <Field>
      {label && <FieldLabel>{label}</FieldLabel>}
      <Select
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
