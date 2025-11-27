import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Link, Linkedin } from "lucide-react";
import { copyToClipboard } from "~/utils/copy";
import { XIcon } from "~/components/icons";

export type TUseShareCurrentURLItem = {
  title: string;
  action: () => Promise<void>;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
};

export type TUseShareCurrentURLItemsOptions = {
  cb?: () => void;
};

export function UseShareCurrentURLItems(
  options = {} as TUseShareCurrentURLItemsOptions,
) {
  const { t } = useTranslation("common");
  const { cb } = options;

  return React.useMemo((): TUseShareCurrentURLItem[] => {
    if (typeof window === "undefined" || !window) return [];

    const currentURL = window.location.href;

    return [
      {
        title: t("copy_link"),
        icon: Link,
        action: async () => {
          copyToClipboard(currentURL);
          cb?.();
        },
      },
      {
        title: t("share_on_x"),
        icon: XIcon,
        action: async () => {
          window.open(`https://twitter.com/intent/tweet?url=${currentURL}`);
          cb?.();
        },
      },
      {
        title: t("share_on_facebook"),
        icon: Facebook,
        action: async () => {
          (window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
          ),
            cb?.());
        },
      },
      {
        title: t("share_on_linkedin"),
        icon: Linkedin,
        action: async () => {
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`,
          );
          cb?.();
        },
      },
    ];
  }, [t, cb]);
}
