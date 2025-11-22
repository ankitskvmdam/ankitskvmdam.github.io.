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
      <DialogContent
        showCloseButton={false}
        className="outline-0 bg-layer-0 border-0 p-1 rounded-xl"
      >
        <CommandPaletteDialogContent
          requestCloseCommandPalette={requestCloseCommandPalette}
        />
      </DialogContent>
    </Dialog>
  );
}
