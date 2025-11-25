import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { AsaanLogo } from "~/components/logo/asaan";
import { Slash } from "~/components/section/slash";
import { cn } from "~/lib/utils";
import { AboutTranslation } from "~/locales/en/about";

export type TAboutParaProps = {
  i18nKey: keyof AboutTranslation;
  slash: string;
  logo?: React.ReactNode;
};

export function AboutPara(props: TAboutParaProps) {
  const { i18nKey, slash, logo } = props;
  const { t } = useTranslation("about");
  return (
    <div className={cn("relative pt-2")}>
      <div className="relative z-10">
        <Slash component="inline">{slash}</Slash>
        {logo && <div className="py-2 fill-foreground [&>svg]:h-8">{logo}</div>}
        <p className="pt-1 leading-relaxed">
          <Trans
            t={t}
            i18nKey={i18nKey}
            components={[<strong key="strong" />, <br key="break" />]}
          />
        </p>
      </div>
    </div>
  );
}
