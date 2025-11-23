import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "../ui/command";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Kbd } from "../ui/kbd";
import { useTranslation } from "react-i18next";
import { CommandPaletteDialogInfo } from "./dialog-info";
import { useCommandItems } from "./use-command-items";
import { CommandMenuItem } from "./command-menu-item";

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
    <div className="dialog-content-wrapper">
      <DialogTitle className="hidden">{t("command.title")}</DialogTitle>
      <DialogDescription className="hidden">
        {t("command.description")}
      </DialogDescription>

      <Command className="bg-layer-1 pb-5">
        <div className="relative p-2" data-slot="command-input-wrapper">
          <Kbd className="bg-background border absolute left-4 top-4">/</Kbd>
          <CommandInput
            className="bg-muted pl-9"
            placeholder={t("command.placeholder")}
          />
        </div>
        <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
          <CommandEmpty>{t("command.no_command")}</CommandEmpty>
          {commandGroups.map(({ items, heading }) => (
            <CommandGroup heading={heading} key={heading}>
              {items.map((item) => (
                <CommandMenuItem
                  key={item.title}
                  onSelect={item.action}
                  item={item}
                />
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
      <CommandPaletteDialogInfo />
    </div>
  );
}
