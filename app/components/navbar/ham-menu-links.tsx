import { menuItems } from "./menu-items";
import { cn } from "~/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router";

export type THamMenuLinksProps = {
  onRequestClose: () => void;
};

export function HamMenuLinks(props: THamMenuLinksProps) {
  const { onRequestClose } = props;

  const linkClassname = React.useMemo(
    () => buttonVariants({ variant: "ghost" }),
    [],
  );
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.label} onClick={onRequestClose}>
          <Link
            to={item.href}
            className={cn(
              linkClassname,
              "w-full justify-start font-mono font-medium",
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
