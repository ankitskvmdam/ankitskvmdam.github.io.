import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { useActionMenuItems } from "./use-action-menu-items";

export type TActionMenuProps = {
  containerClassname?: string;
  labelClassname?: string;
};

export function ActionMenu(props: TActionMenuProps) {
  const { containerClassname, labelClassname } = props;
  const items = useActionMenuItems();
  return (
    <div className={cn("bg-layer-0 rounded-full", containerClassname)}>
      {items.map((item, index) => (
        <Button
          className="rounded-full"
          variant="ghost"
          aria-label={item.label}
          title={item.label}
          key={index}
          onClick={item.onClick}
        >
          <item.icon />
          <span className={labelClassname}>{item.label}</span>
        </Button>
      ))}
    </div>
  );
}
