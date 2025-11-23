import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";

export type THamMenuIconProps = {
  isOpen?: boolean;
};

export function HamMenuIcon(props: THamMenuIconProps) {
  const { isOpen } = props;

  const { t } = useTranslation("common");
  return (
    <span className="relative h-4 w-4">
      <span
        className={cn(
          "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
          isOpen ? "top-[0.4rem] -rotate-45" : "top-1",
        )}
      />
      <span
        className={cn(
          "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
          isOpen ? "top-[0.4rem] rotate-45" : "top-2.5",
        )}
      />
      <span className="sr-only">{t("toggle_menu")}</span>
    </span>
  );
}
