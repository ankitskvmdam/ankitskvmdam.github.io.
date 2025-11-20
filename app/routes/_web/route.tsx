import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function WebRouteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
