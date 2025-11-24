import { cn } from "~/lib/utils";
import { THighlightProject } from "./use-get-highlight-projects";
import { Trans, useTranslation } from "react-i18next";

export type THighlightProjectDescriptionProps = {
  descriptionKey: THighlightProject["descriptionKey"];
  className?: string;
};

export function HighlightProjectDescription(
  props: THighlightProjectDescriptionProps,
) {
  const { descriptionKey, className } = props;

  const { t } = useTranslation("projects");

  return (
    <div
      className={cn(
        "text-muted-foreground mt-4 lg:border-t-2 lg:border-muted lg:pt-8",
        className,
      )}
    >
      <Trans
        t={t}
        i18nKey={descriptionKey}
        components={[<br key="break" />, <code key="code" />]}
      />
    </div>
  );
}
