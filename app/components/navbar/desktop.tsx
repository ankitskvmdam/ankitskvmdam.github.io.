import { Link } from "react-router";
import { menuItems } from "./menu-items";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "~/lib/utils";

export function DesktopMenu() {
  return (
    <div className="hidden font-monospace md:block">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "text-2xl font-bold rounded-full",
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
