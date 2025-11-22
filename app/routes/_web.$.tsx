import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { Slash } from "~/components/section/slash";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार) - Page Not Found " },
    {
      name: "description",
      content: "We are sorry, but the page you are looking for does not exist.",
    },
  ];
};

export default function CatchAll() {
  const { t } = useTranslation();
  return (
    <div className="section section-min-h">
      <div className="section-wrapper section-padding">
        <div className="z-1 absolute left-0 h-96 w-full bg-[linear-gradient(to_right,var(--background-layer-0)_1px,transparent_1px),linear-gradient(to_bottom,var(--background-layer-0)_1px,transparent_1px)] bg-[size:18px_18px] top-24 md:top-32"></div>
        <div className="z-10 relative flex flex-col">
          <Slash component="heading" className="mt-6 md:mt-12 lg:mt-24">
            /404
          </Slash>
          <div className="font-monospace font-bold text-5xl md:text-7xl">
            {t("common:page_not_found")}
          </div>
          <div className="text-muted-foreground text-sm mt-4">
            {t("common:page_not_found_description")}
          </div>
        </div>
      </div>
    </div>
  );
}
