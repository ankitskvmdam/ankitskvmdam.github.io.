import { useAppStore } from "~/app-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { useTranslation } from "react-i18next";
import { FontSettingsFontSize } from "./font-settings-font-size";

export function FontSettingsDialog() {
  const { t } = useTranslation("common");

  const { setFontSettingsDialogOpen, isFontSettingsDialogOpen } = useAppStore(
    (state) => ({
      setFontSettingsDialogOpen: state.setFontSettingsDialogOpen,
      isFontSettingsDialogOpen: state.isFontSettingsDialogOpen,
    }),
  );

  return (
    <Dialog
      open={isFontSettingsDialogOpen}
      onOpenChange={setFontSettingsDialogOpen}
    >
      <DialogContent className="dialog-content max-w-sm">
        <div className="dialog-content-wrapper">
          <DialogTitle>{t("font_settings_dialog.title")}</DialogTitle>
          <DialogDescription className="mt-2">
            {t("font_settings_dialog.description")}
          </DialogDescription>
          <div className="mt-4">
            <FontSettingsFontSize />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
