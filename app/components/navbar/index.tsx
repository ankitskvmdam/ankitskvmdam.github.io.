import { AnkLogo } from "../logo/ank";

export function Navbar() {
  return (
    <header className="h-16">
      <nav className="rounded-md z-50 section flex justify-between items-center">
        <div className="section-wrapper section-padding">
          <AnkLogo />
        </div>
      </nav>
    </header>
  );
}
