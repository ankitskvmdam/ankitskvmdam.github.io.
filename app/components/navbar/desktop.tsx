import { Link } from "react-router";
import { menuItems } from "./menu-items";
import { Button } from "../ui/button";

export function DesktopMenu() {
  return (
    <div className="hidden font-monospace md:block">
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li>
            <Link to={item.href}>
              <Button
                variant="ghost"
                className="text-2xl font-bold rounded-full"
              >
                {item.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
