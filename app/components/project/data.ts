export type TProjectLink = {
  id: string;
  type: "github" | "npm" | "website" | "notebook";
  href: string;
};

export type TProjectData = {
  id: string;
  slash: string;
  title: string;
  translationKey: "cleanJSDocTheme" | "outspeedJS" | "ersilia" | "ersiliaTrain";
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
  {
    id: "3",
    number: "03.",
    slash: "/projects/ersilia/integrate-reinvent4",
    title: "Integrate REINVENT4 in the Ersilia Hub",
    translationKey: "ersilia",
    links: [
      {
        id: "github",
        href: "https://github.com/ersilia-os/ersilia/issues/942",
        type: "github",
      },
      {
        id: "notebook",
        href: "https://github.com/ankitskvmdam/REINVENT4_NOTEBOOK/tree/master/notebooks",
        type: "notebook",
      },
      {
        id: "website",
        type: "website",
        href: "https://www.ersilia.io/",
      },
    ],
  },
  {
    id: "4",
    number: "04.",
    slash: "/projects/ersilia/train-reinvent4",
    title:
      "Train REINVENT's Mol2MolSimilarity model to generate molecules similar in 3d shape.",
    translationKey: "ersiliaTrain",
    links: [
      {
        id: "github",
        href: "https://github.com/ersilia-os/ersilia/issues/1128",
        type: "github",
      },
      {
        id: "notebook",
        type: "notebook",
        href: "https://github.com/ankitskvmdam/reinvent-transfer-learning/blob/master/notebooks/TransferLearning.ipynb",
      },
    ],
  },
];
