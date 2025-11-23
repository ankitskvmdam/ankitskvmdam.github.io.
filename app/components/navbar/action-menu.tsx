import { Button } from "../ui/button";
import { FontSettingsDialog } from "./font-settings";
import { useActionMenuItems } from "./use-action-menu-items";

export function ActionMenu() {
  const items = useActionMenuItems();
  return (
    <div className="hidden bg-layer-0 rounded-full md:block">
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
          <span className="hidden lg:block">{item.label}</span>
        </Button>
      ))}
      <FontSettingsDialog />
    </div>
  );
}
