import type { MetaFunction } from "@remix-run/cloudflare";
import { Landing } from "~/components/landing";
import "../global.scss";
import { Navbar } from "~/components/navbar";
import { About } from "~/components/about";
import { Project } from "~/components/project";
import { Footer } from "~/components/footer";
import { Experience } from "~/components/experience";
import { Button } from "~/components/ui/button";

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
        <Experience />
        <Button>Click me</Button>
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
