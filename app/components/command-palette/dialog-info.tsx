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
    <div className="border-t  pt-2 flex gap-2 flex-col justify-between sm:flex-row">
      {items.map((item) => (
        <div className="flex items-center" key={item.msg}>
          <Kbd className="mr-1 mt-1">{item.icon}</Kbd>
          <span>{item.msg}</span>
        </div>
      ))}
    </div>
  );
}
