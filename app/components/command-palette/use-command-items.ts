import { useNavigate } from "react-router";
import {
  ALargeSmall,
  ArrowRight,
  ClipboardCopy,
  Menu,
  SwatchBook,
} from "lucide-react";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_ROUTE, BLOG_ROUTE, PROJECTS_ROUTE } from "~/constants/routes";
import { useThemeAction } from "~/actions/use-theme-action";
import { useAppStore } from "~/app-store";
import { contactLinks } from "~/constants/contact";
import { copyToClipboard } from "~/utils/copy";

export type TCommandPaletteDialogContentProps = {
  requestCloseCommandPalette: () => void;
};

export type TCommandPalettelItem = {
  title: string;
  description?: string;
  action: () => Promise<void>;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
};

export function useCommandItems(props: TCommandPaletteDialogContentProps) {
  const { t } = useTranslation("common");
  const { requestCloseCommandPalette } = props;
  const navigate = useNavigate();

  const { toggleTheme } = useThemeAction();
  const { setFontSettingsDialogOpen } = useAppStore((state) => ({
    setFontSettingsDialogOpen: state.setFontSettingsDialogOpen,
  }));

  const actionItems = React.useMemo((): TCommandPalettelItem[] => {
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

  const pages = React.useMemo((): TCommandPalettelItem[] => {
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

  const contact = React.useMemo((): TCommandPalettelItem[] => {
    const contactArray = [["Name", "Ankit Kumar"]] as [string, string][];
    const items = contactLinks.map((item): TCommandPalettelItem => {
      contactArray.push([item.title, item.href.replaceAll("mailto:", "")]);
      return {
        title: item.title,
        icon: item.icon,
        description: item.href.replaceAll("mailto:", ""),
        action: async () => {
          requestCloseCommandPalette();
          window.open(item.href, "_blank");
        },
      };
    });

    return [
      {
        title: t("command.copy_contact_details"),
        action: async () => {
          requestCloseCommandPalette();
          copyToClipboard(
            contactArray.map(([title, href]) => `${title}: ${href}`).join("\n"),
          );
        },
        icon: ClipboardCopy,
      },
      ...items,
    ];
  }, [t, requestCloseCommandPalette]);

  return React.useMemo(
    (): { items: TCommandPalettelItem[]; heading: string }[] => [
      {
        items: actionItems,
        heading: t("command.action_heading"),
      },
      {
        items: pages,
        heading: t("command.pages_heading"),
      },
      {
        items: contact,
        heading: t("command.contact_heading"),
      },
    ],
    [actionItems, pages, contact],
  );
}
