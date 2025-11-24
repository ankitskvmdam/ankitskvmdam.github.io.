import { ABOUT_ROUTE, BLOGS_ROUTE, PROJECTS_ROUTE } from "~/constants/routes";

export type TMenuItem = {
  label: string;
  href: string;
};

export const menuItems: TMenuItem[] = [
  {
    label: "/home",
    href: "/",
  },
  {
    label: "/about",
    href: ABOUT_ROUTE,
  },
  {
    label: "/blogs",
    href: BLOGS_ROUTE,
  },
  {
    label: "/projects",
    href: PROJECTS_ROUTE,
  },
];
