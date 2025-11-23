import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { HamMenuIcon } from "./ham-menu-trigger";
import { HamMenuLinks } from "./ham-menu-links";
import { ActionMenu } from "./action-menu";
import { Command } from "lucide-react";
import { useAppStore } from "~/app-store";
import { useTranslation } from "react-i18next";

export function HamMenu() {
  const [open, setOpen] = React.useState(false);

  const { t } = useTranslation("common");
  const { setIsCommandPaletteOpen } = useAppStore((state) => ({
    setIsCommandPaletteOpen: state.setIsCommandPaletteOpen,
  }));

  const handleCloseMenu = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="ml-auto md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={open ? "secondary" : "ghost"} className="relative">
            <HamMenuIcon isOpen={open} />
            <span className="ml-2 -mt-0.5">{t("menu")}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="shadow-none bg-layer-0 p-0.5 rounded-xl"
          align="start"
          side="bottom"
          alignOffset={-16}
          sideOffset={14}
        >
          <div className="bg-layer-1 p-2 rounded-xl">
            <HamMenuLinks onRequestClose={handleCloseMenu} />
            <div className="flex justify-between items-center mt-4">
              <ActionMenu
                containerClassname="inline-flex"
                labelClassname="hidden"
              />
              <Button
                variant="secondary"
                className="rounded-full"
                onClick={() => {
                  handleCloseMenu();
                  setIsCommandPaletteOpen(true);
                }}
              >
                <Command /> {t("command.short_name")}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
