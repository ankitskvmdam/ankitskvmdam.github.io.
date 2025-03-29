import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/landing";
import "../global.scss";
import { Logo } from "~/components/logo";
import { Navbar } from "~/components/navbar";
import { About } from "~/components/about";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
        <About />
      </main>
    </>
  );
}
