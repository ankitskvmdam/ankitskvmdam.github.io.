import { useNavigate } from "react-router";
import { ALargeSmall, ArrowRight, Menu, SwatchBook } from "lucide-react";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_ROUTE, BLOG_ROUTE, PROJECTS_ROUTE } from "~/constants/routes";
import { useThemeAction } from "~/actions/use-theme-action";
import { useAppStore } from "~/app-store";

export type TCommandPaletteDialogContentProps = {
  requestCloseCommandPalette: () => void;
};

export function useCommandItems(props: TCommandPaletteDialogContentProps) {
  const { t } = useTranslation("common");
  const { requestCloseCommandPalette } = props;
  const navigate = useNavigate();

  const { toggleTheme } = useThemeAction();
  const { setFontSettingsDialogOpen } = useAppStore((state) => ({
    setFontSettingsDialogOpen: state.setFontSettingsDialogOpen,
  }));

  const actionItems = React.useMemo(() => {
    return [
      {
        title: t("command.toggle_theme"),
        action: async () => {
          requestCloseCommandPalette();
          toggleTheme();
        },
        icon: SwatchBook,
      },
      {
        title: t("command.change_font_size"),
        action: async () => {
          requestCloseCommandPalette();
          setTimeout(() => {
            setFontSettingsDialogOpen(true);
          }, 300);
        },
        icon: ALargeSmall,
      },
    ];
  }, [t, toggleTheme, requestCloseCommandPalette, setFontSettingsDialogOpen]);

  const pages = React.useMemo(() => {
    return [
      {
        title: t("command.goto_projects"),
        action: async () => {
          navigate(PROJECTS_ROUTE);
          requestCloseCommandPalette();
          console.log("Opening project page");
        },
        icon: ArrowRight,
      },
      {
        title: t("command.goto_blog"),
        action: async () => {
          requestCloseCommandPalette();
          navigate(BLOG_ROUTE);
          console.log("Opening blog page");
        },
        icon: ArrowRight,
      },
      {
        title: t("command.goto_about"),
        action: async () => {
          navigate(ABOUT_ROUTE);
          requestCloseCommandPalette();
        },
        icon: ArrowRight,
      },
    ];
  }, [t, requestCloseCommandPalette, navigate]);

  return React.useMemo(
    () => [
      {
        items: actionItems,
        heading: t("command.action_heading"),
      },
      {
        items: pages,
        heading: t("command.pages_heading"),
      },
    ],
    [actionItems, pages],
  );
}
