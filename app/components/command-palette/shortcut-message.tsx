import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Kbd } from "../ui/kbd";

export function CommandPaletteShortcutMessage() {
  const { t } = useTranslation("common");
  return (
    <div className="flex-1 justify-center items-end py-3 hidden sm:flex">
      <div className="flex items-center gap-0.5 text-muted-foreground">
        <Trans
          t={t}
          i18nKey="press_slash_info"
          components={[<Kbd key="kbd" />]}
        />
      </div>
    </div>
  );
}
