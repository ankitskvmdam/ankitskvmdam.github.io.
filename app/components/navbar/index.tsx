import { Link } from "react-router";
import { AnkLogo } from "../logo/ank";
import { ActionMenu } from "./action-menu";
import { Menu } from "./menu";
import { FontSettingsDialog } from "./font-settings";

export function Navbar() {
  return (
    <header className="relative z-10">
      <nav className="rounded-md z-50 section flex items-center">
        <div className="section-wrapper section-padding flex item-center">
          <Link className="flex items-center" to="/">
            <AnkLogo className="cursor-pointer" />
          </Link>

          <Menu />
          <ActionMenu
            containerClassname="hidden md:block"
            labelClassname="hidden lg:block"
          />
          <FontSettingsDialog />
        </div>
      </nav>
    </header>
  );
}
