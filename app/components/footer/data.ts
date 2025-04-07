import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon, TIconProps } from "../icons";

export type TSocialLink = {
  id: string;
  icon: (props: TIconProps) => JSX.Element;
  href: string;
};

export const socialLinks: TSocialLink[] = [
  {
    id: "github",
    icon: GithubIcon,
    href: "https://github.com/ankitskvmdam",
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/ankdev",
  },
  {
    id: "mail",
    icon: MailIcon,
    href: "mailto:ankits.kvmdam@gmail.com",
  },
];
