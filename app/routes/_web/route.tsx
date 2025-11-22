import { Outlet } from "react-router";
import { CommandPalette } from "~/components/command-palette";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function WebRouteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <CommandPalette />
      </main>
      <Footer />
    </>
  );
}
