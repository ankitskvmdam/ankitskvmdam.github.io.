import { ALargeSmall, SwatchBook } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export function useActionMenuItems() {
  const { t } = useTranslation("common");

  return React.useMemo(
    () => [
      {
        label: t("action_menu.theme"),
        icon: SwatchBook,
        onClick: () => {
          // Implement theme change logic here
        },
      },
      {
        label: t("action_menu.font_size"),
        icon: ALargeSmall,
        onClick: () => {
          // Implement font size change logic here
        },
      },
    ],
    [],
  );
}
