import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";
export type TSocialLink = {
  id: string;
  icon: LucideIcon;
  href: string;
};

export const socialLinks: TSocialLink[] = [
  {
    id: "github",
    icon: Github,
    href: "https://github.com/ankitskvmdam",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/ankdev",
  },
  {
    id: "mail",
    icon: Mail,
    href: "mailto:ankits.kvmdam@gmail.com",
  },
];
