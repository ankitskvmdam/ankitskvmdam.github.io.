import { AnkLogo } from "../logo/ank";

export function Navbar() {
  return (
    <header>
      <nav className="section flex justify-between items-center">
        <div className="section-wrapper section-padding">
          <AnkLogo />
        </div>
      </nav>
    </header>
  );
}
