export type TProjectLink = {
  id: string;
  type: "github" | "npm" | "website";
  href: string;
};

export type TProjectData = {
  id: string;
  slash: string;
  title: string;
  translationKey: "cleanJSDocTheme" | "outspeedJS";
  number: string;
  links: TProjectLink[];
};

export const data: TProjectData[] = [
  {
    id: "1",
    slash: "/projects/personal/clean-jsdoc-theme",
    title: "clean-jsdoc-theme",
    translationKey: "cleanJSDocTheme",
    number: "01.",
    links: [
      {
        id: "npm",
        type: "npm",
        href: "https://www.npmjs.com/package/clean-jsdoc-theme",
      },
      {
        id: "github",
        type: "github",
        href: "https://github.com/ankitskvmdam/clean-jsdoc-theme/tree/master",
      },
      {
        id: "web",
        type: "website",
        href: "http://localhost:5173/clean-jsdoc-theme/v4/",
      },
    ],
  },
  {
    id: "2",
    number: "02.",
    slash: "/projects/outspeed/outspeed-js",
    title: "Outspeed JS",
    translationKey: "outspeedJS",
    links: [
      {
        id: "npm",
        href: "https://www.npmjs.com/package/@outspeed/core",
        type: "npm",
      },
      {
        id: "github",
        href: "https://github.com/outspeed-ai/outspeed-js",
        type: "github",
      },
      {
        id: "website",
        href: "https://outspeed.com/",
        type: "website",
      },
    ],
  },
];
