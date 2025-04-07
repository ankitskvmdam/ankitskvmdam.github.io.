import { AsaanLogo } from "../logo/asaan";
import { BodygramLogo } from "../logo/bodygram";
import { StartbahnLogo } from "../logo/startbahn";
import { UniversityOfCambridgeLogo } from "../logo/university-of-cambridge";

export type TExperienceData = {
  id: string;
  translationBaseKey: "bodygram" | "startbahn" | "uoc" | "asaan";
  title: string;
  slash: string;
  notableProjects: number[];
  logo: () => JSX.Element;
  skills: string[];
};

export const data: TExperienceData[] = [
  {
    id: "bodygram",
    title: "Software Engineer, Bodygram Inc., 2023-Present",
    slash: "/experience/bodygram",
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
    title: "Frontend Engineer, Startbahn Inc., 2022-2023",
    slash: "/experience/startbahn",
    translationBaseKey: "startbahn",
    logo: StartbahnLogo,
    notableProjects: [],
    skills: ["React", "NextJS", "Vue", "StyledComponents", "CircleCI"],
  },
  {
    id: "uoc",
    translationBaseKey: "uoc",
    title: "Research Software Engineer, University of Cambridge, 2021-2022",
    slash: "/experience/uoc",
    logo: UniversityOfCambridgeLogo,
    notableProjects: [],
    skills: ["React", "Redux", "Python", "UI/UX"],
  },
  {
    id: "asaan",
    title: "Co-Founder/Frontend Lead, Asaan Contracts Pvt. Ltd., 2017-2021",
    slash: "/experience/asaan",
    translationBaseKey: "asaan",
    logo: AsaanLogo,
    notableProjects: [],
    skills: ["React", "VueJS", "SolidJS", "Python", "Docker", "Flask", "AWS"],
  },
];
