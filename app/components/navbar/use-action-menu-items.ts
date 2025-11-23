import { ALargeSmall, SwatchBook } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeAction } from "~/actions/use-theme-action";
import { useAppStore } from "~/app-store";

export function useActionMenuItems() {
  const { t } = useTranslation("common");

  const { toggleTheme } = useThemeAction();
  const { setFontSettingsDialogOpen } = useAppStore((state) => ({
    setFontSettingsDialogOpen: state.setFontSettingsDialogOpen,
  }));

  return React.useMemo(
    () => [
      {
        label: t("action_menu.theme"),
        icon: SwatchBook,
        onClick: toggleTheme,
      },
      {
        label: t("action_menu.font_settings"),
        icon: ALargeSmall,
        onClick: () => {
          setFontSettingsDialogOpen(true);
        },
      },
    ],
    [toggleTheme, setFontSettingsDialogOpen],
  );
}
