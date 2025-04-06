import { AsaanLogo } from "../logo/asaan";
import { BodygramLogo } from "../logo/bodygram";
import { StartbahnLogo } from "../logo/startbahn";
import { UniversityOfCambridgeLogo } from "../logo/university-of-cambridge";

export type TNotableProject = {
  id: string;
  title: string;
  slash: string;
  content: string;
};

export type TExperienceData = {
  id: string;
  slash: string;
  title: string;
  content: string;
  logo: () => JSX.Element;
  notableProjects: TNotableProject[];
};

export const data: TExperienceData[] = [
  {
    id: "bodygram",
    slash: "/experience/01",
    title: "Software Engineer, Bodygram INC., 2023-Present",
    logo: BodygramLogo,
    content: `At bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things.`,
    notableProjects: [
      {
        id: "web-components",
        slash: "/experience/01/projects/01",
        title: "SDK to use Bodygram's API to integrate 3D Avatar",
        content: `One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form. Many customers wanted to leverage this data to display realistic avatars, which presented an exciting challenge—building a platform-agnostic SDK. I worked on developing reusable web components that seamlessly render avatars across web apps, iOS, and Android applications. From conceptualization to execution, I built this solution from scratch, making it highly accessible and adaptable. This innovation significantly enhanced the user experience and broadened the platform’s usability.`,
      },
      {
        id: "scanflow",
        slash: "/experience/01/projects/02",
        title: "Scanflow React",
        content:
          "The first project that I worked on when I joined bodygram. One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form.",
      },
    ],
  },
  {
    id: "startbahn",
    slash: "/experience/02",
    logo: StartbahnLogo,
    title: "Senior Software Engineer, Startbahn INC., 2022-2023",
    content: `At bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things.`,
    notableProjects: [
      {
        id: "web-components",
        slash: "/experience/02/projects/01",
        title: "SDK to use Bodygram's API to integrate 3D Avatar",
        content: `One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form. Many customers wanted to leverage this data to display realistic avatars, which presented an exciting challenge—building a platform-agnostic SDK. I worked on developing reusable web components that seamlessly render avatars across web apps, iOS, and Android applications. From conceptualization to execution, I built this solution from scratch, making it highly accessible and adaptable. This innovation significantly enhanced the user experience and broadened the platform’s usability.`,
      },
      {
        id: "scanflow",
        slash: "/experience/02/projects/02",
        title: "Scanflow React",
        content:
          "The first project that I worked on when I joined bodygram. One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form.",
      },
    ],
  },
  {
    id: "cambridge",
    slash: "/experience/03",
    logo: UniversityOfCambridgeLogo,
    title: "Research Software Engineer, University of Cambridge., 2021-2022",
    content: `At bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things.`,
    notableProjects: [
      {
        id: "web-components",
        slash: "/experience/03/projects/03",
        title: "SDK to use Bodygram's API to integrate 3D Avatar",
        content: `One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form. Many customers wanted to leverage this data to display realistic avatars, which presented an exciting challenge—building a platform-agnostic SDK. I worked on developing reusable web components that seamlessly render avatars across web apps, iOS, and Android applications. From conceptualization to execution, I built this solution from scratch, making it highly accessible and adaptable. This innovation significantly enhanced the user experience and broadened the platform’s usability.`,
      },
      {
        id: "scanflow",
        slash: "/experience/01/projects/02",
        title: "Scanflow React",
        content:
          "The first project that I worked on when I joined bodygram. One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form.",
      },
    ],
  },
  {
    id: "asaan",
    slash: "/experience/04",
    title: "Frontend Lead, Asaan, 2017-2021",
    logo: AsaanLogo,
    content: `At bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things. But don’t know what other things I am doing so I will tell you those after sometime. thanksAt bodygram I am doing the following things, and I am also doing these following things.`,
    notableProjects: [
      {
        id: "web-components",
        slash: "/experience/01/projects/01",
        title: "SDK to use Bodygram's API to integrate 3D Avatar",
        content: `One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form. Many customers wanted to leverage this data to display realistic avatars, which presented an exciting challenge—building a platform-agnostic SDK. I worked on developing reusable web components that seamlessly render avatars across web apps, iOS, and Android applications. From conceptualization to execution, I built this solution from scratch, making it highly accessible and adaptable. This innovation significantly enhanced the user experience and broadened the platform’s usability.`,
      },
      {
        id: "scanflow",
        slash: "/experience/01/projects/02",
        title: "Scanflow React",
        content:
          "The first project that I worked on when I joined bodygram. One of Bodygram's core products is the Bodygram Scanner Platform, which allows clients to obtain precise body measurement data that they can integrate into their applications in any form.",
      },
    ],
  },
];
