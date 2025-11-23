import { useTranslation } from "react-i18next";
import {
  fontRange,
  useFontSettingsAction,
} from "~/actions/use-font-settings-action";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { Minus, Plus, RotateCcw } from "lucide-react";

export function FontSettingsFontSize() {
  const { updateFontSize, fontSize } = useFontSettingsAction();
  const { t } = useTranslation("common");

  return (
    <div className="flex items-center">
      <div className="w-32">{t("font_settings_dialog.font_size")}</div>
      <ButtonGroup>
        <ButtonGroup>
          <Button
            variant="outline"
            onClick={() => updateFontSize(fontSize - 1)}
            disabled={fontSize <= fontRange.min}
          >
            <Minus />
          </Button>
          <Button variant="outline" className="hover:bg-transparent">
            {fontSize}
          </Button>
          <Button
            variant="outline"
            onClick={() => updateFontSize(fontSize + 1)}
            disabled={fontSize >= fontRange.max}
          >
            <Plus />
          </Button>
        </ButtonGroup>
        <ButtonGroup className={fontSize === fontRange.default ? "hidden" : ""}>
          <Button
            variant="outline"
            onClick={() => updateFontSize(fontRange.default)}
          >
            <RotateCcw />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
}
