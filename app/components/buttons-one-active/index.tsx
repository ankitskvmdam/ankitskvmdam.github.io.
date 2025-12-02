import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

export type TButtonsOneActive = {
  buttons: {
    id: string;
    label: string;
  }[];
  activeButtonId: string;
  onClick: (id: string) => void;
};

export function ButtonsOneActive(props: TButtonsOneActive) {
  const { buttons, activeButtonId, onClick } = props;

  return (
    <div className="bg-layer-0 p-1 rounded-lg inline-flex">
      <div className="bg-layer-1 p-1 rounded-lg space-x-1">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={() => onClick(button.id)}
            className={cn(
              "text-xs py-0 h-7 px-2  min-w-16",
              activeButtonId != button.id && "border-transparent",
            )}
            variant={button.id === activeButtonId ? "secondary" : "ghost"}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
