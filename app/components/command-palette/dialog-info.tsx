import { CircleArrowOutUpLeft, CornerDownLeft } from "lucide-react";
import { Kbd } from "../ui/kbd";
import { useTranslation } from "react-i18next";
import React from "react";

export function CommandPaletteDialogInfo() {
  const { t } = useTranslation("common");

  const items = React.useMemo(() => {
    return [
      {
        msg: t("command.enter_to_execute"),
        icon: <CornerDownLeft />,
      },
      {
        msg: t("command.esc_to_close"),
        icon: <CircleArrowOutUpLeft />,
      },
    ];
  }, [t]);

  return (
    <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center justify-between gap-2 rounded-b-xl px-4 text-xs font-medium bg-layer-0">
      {items.map((item) => (
        <div className="flex items-center" key={item.msg}>
          <Kbd className="mr-1">{item.icon}</Kbd>
          <span>{item.msg}</span>
        </div>
      ))}
    </div>
  );
}
