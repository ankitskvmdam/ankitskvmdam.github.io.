import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Kbd } from "../ui/kbd";
import { useTranslation } from "react-i18next";
import { CommandPaletteDialogInfo } from "./dialog-info";
import { useCommandItems } from "./use-command-items";

export type TCommandPaletteDialogContentProps = {
  requestCloseCommandPalette: () => void;
};

export function CommandPaletteDialogContent(
  props: TCommandPaletteDialogContentProps,
) {
  const { t } = useTranslation("common");
  const { requestCloseCommandPalette } = props;

  const commandGroups = useCommandItems({ requestCloseCommandPalette });

  return (
    <div className="bg-bg-2 p-4 rounded-xl">
      <DialogTitle className="hidden">{t("command.title")}</DialogTitle>
      <DialogDescription className="hidden">
        {t("command.description")}
      </DialogDescription>

      <Command className="h-[350px]">
        <div className="relative" data-slot="command-input-wrapper">
          <Kbd className="bg-background border absolute left-2 top-2">/</Kbd>
          <CommandInput
            className="bg-muted pl-9"
            placeholder={t("command.placeholder")}
          />
        </div>
        <CommandList>
          <CommandEmpty>{t("command.no_command")}</CommandEmpty>
          {commandGroups.map(({ items, heading }) => (
            <CommandGroup heading={heading} key={heading}>
              {items.map((item) => (
                <CommandItem key={item.title} onSelect={item.action}>
                  {item.icon && <item.icon />}
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <CommandPaletteDialogInfo />
    </div>
  );
}
