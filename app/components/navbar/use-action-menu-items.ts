import { ALargeSmall, SwatchBook } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeAction } from "~/actions/use-theme-action";

export function useActionMenuItems() {
  const { t } = useTranslation("common");

  const { toggleTheme } = useThemeAction();

  return React.useMemo(
    () => [
      {
        label: t("action_menu.theme"),
        icon: SwatchBook,
        onClick: toggleTheme,
      },
      {
        label: t("action_menu.font_size"),
        icon: ALargeSmall,
        onClick: () => {
          // Implement font size change logic here
        },
      },
    ],
    [toggleTheme],
  );
}
