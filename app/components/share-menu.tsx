import { Share } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { UseShareCurrentURLItems } from "~/hooks/use-share-current-url";

/** Shares whatever page it is rendered on. Used by blog posts and write-ups. */
export function ShareMenu() {
  const { t } = useTranslation("common");
  const items = UseShareCurrentURLItems();

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
          <DropdownMenuItem onClick={item.action} key={item.title}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
