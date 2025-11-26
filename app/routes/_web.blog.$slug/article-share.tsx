import { Facebook, Link, Linkedin, Share, Twitter } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { XIcon } from "~/components/icons";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { copyToClipboard } from "~/utils/copy";

export function ArticleShare() {
  const { t } = useTranslation("blogs");

  const items = React.useMemo(() => {
    if (typeof window === "undefined" || !window) return [];

    const currentURL = encodeURIComponent(window.location.href);
    return [
      {
        label: t("copy_link"),
        icon: Link,
        onClick: () => copyToClipboard(window.location.href),
      },
      {
        label: t("share_on_x"),
        icon: XIcon,
        onClick: () =>
          window.open(`https://twitter.com/intent/tweet?url=${currentURL}`),
      },
      {
        label: t("share_on_facebook"),
        icon: Facebook,
        onClick: () =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
          ),
      },
      {
        label: t("share_on_linkedin"),
        icon: Linkedin,
        onClick: () =>
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`,
          ),
      },
    ];
  }, [t]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="rounded-2xl">
          <Share />
          {t("share")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem onClick={item.onClick} key={item.label}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
