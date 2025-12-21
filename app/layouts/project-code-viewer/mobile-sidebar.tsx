import { Menu, XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import React from "react";
import { ProjectCodeViewerSidebar } from "./sidebar";
import { cn } from "~/lib/utils";
import { useClickOutside } from "~/hooks/use-click-outside";

export function ProjectCodeViewerMobileSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));
  const handleOnMenuClick = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      className="h-full relative bg-sidebar rounded-tl-lg rounded-bl-lg z-10"
      ref={ref}
    >
      <div className="p-1.5 z-20 relative">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon /> : <Menu />}
        </Button>
      </div>
      <div
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute w-sm top-0 bottom-0 [&_[data-slot='sidebar-group-label']]:pl-12 [&_[data-slot='sidebar-group-label']]:h-11",
        )}
      >
        <ProjectCodeViewerSidebar onMenuClick={handleOnMenuClick} />
      </div>
    </div>
  );
}
