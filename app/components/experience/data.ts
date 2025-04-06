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
  translationBaseKey: "bodygram" | "startbahn" | "uoc" | "asaan";
  notableProjects: number[];
  logo: () => JSX.Element;
  skills: string[];
};

export const data: TExperienceData[] = [
  {
    id: "bodygram",
    logo: BodygramLogo,
    translationBaseKey: "bodygram",
    notableProjects: [0],
    skills: [
      "React",
      "NextJS",
      "Remix",
      "Web Components",
      "ThreeJS",
      "MediaPipe",
      "Astro",
      "Tailwind CSS",
      "AWS",
    ],
  },
  {
    id: "startbahn",
    translationBaseKey: "startbahn",
    logo: StartbahnLogo,
    notableProjects: [],
    skills: ["React", "NextJS", "Vue", "StyledComponents", "CircleCI"],
  },
  {
    id: "uoc",
    translationBaseKey: "uoc",
    logo: UniversityOfCambridgeLogo,
    notableProjects: [],
    skills: ["React", "Redux", "Python", "UI/UX"],
  },
  {
    id: "asaan",
    translationBaseKey: "asaan",
    logo: AsaanLogo,
    notableProjects: [],
    skills: ["React", "VueJS", "SolidJS", "Python", "Docker", "Flask", "AWS"],
  },
];
