import { Dialog, DialogContent } from "../ui/dialog";
import { CommandPaletteDialogContent } from "./dialog-content";

export type TCommandPaletteDialogProps = {
  isOpen: boolean;
  onChangeOpenState: (state: boolean) => void;
  requestCloseCommandPalette: () => void;
};

export function CommandPaletteDialog(props: TCommandPaletteDialogProps) {
  const { isOpen, onChangeOpenState, requestCloseCommandPalette } = props;

  return (
    <Dialog open={isOpen} onOpenChange={onChangeOpenState}>
      <DialogContent className="dialog-content">
        <CommandPaletteDialogContent
          requestCloseCommandPalette={requestCloseCommandPalette}
        />
      </DialogContent>
    </Dialog>
  );
}
