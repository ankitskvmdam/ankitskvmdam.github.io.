import { contactLinks } from "~/constants/contact";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <div className="h-72 section section-padding relative">
      <div className="absolute left-0 bottom-0 right-0 h-56 bg-[url(/assets/footer-bg.png)] opacity-10 bg-cover bg-center dark:opacity-20" />
      <div className="flex section-wrapper flex-col justify-end gap-y-0.5 z-10 relative">
        <div className="flex items-center gap-x-0.5">
          {contactLinks.map((item) => (
            <a target="_blank" className="" href={item.href} key={item.id}>
              <Button
                variant="ghost"
                size="icon-lg"
                className="dark:hover:bg-foreground/10"
              >
                {<item.icon />}
              </Button>
            </a>
          ))}
        </div>
        <div className="font-monospace text-xs">
          Copyright © 2022-2025, Ankit Kumar
        </div>
      </div>
    </div>
  );
}
