import { MetaFunction } from "react-router";

import { Slash } from "~/components/section/slash";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["home", "common"],
};

export default function AboutRoute() {
  return (
    <div className="section relative section-min-h">
      <div className="section-wrapper section-padding relative z-10">
        <Slash component="heading" className="mt-6 md:mt-12 lg:mt-24">
          /about
        </Slash>
        <div className="mt-12 gap-12 flex flex-col">
          <div className="flex flex-col gap-4">
            <span className="font-monospace font-bold leading-none text-5xl md:text-7xl">
              Page under construction.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
