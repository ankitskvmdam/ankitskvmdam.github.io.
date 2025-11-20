import { CommandPaletteDialog } from "./dialog";
import { CommandPaletteShortcutMessage } from "./shortcut-message";
import { useCommandPalette } from "./use-command-palette";

export function CommandPalette() {
  const { isCommandPaletteOpen, requestCloseCommandPalette } =
    useCommandPalette();

  return (
    <div>
      <CommandPaletteShortcutMessage />
      <CommandPaletteDialog
        isOpen={isCommandPaletteOpen}
        onChangeOpenState={(state) => !state && requestCloseCommandPalette()}
        requestCloseCommandPalette={requestCloseCommandPalette}
      />
    </div>
  );
}
