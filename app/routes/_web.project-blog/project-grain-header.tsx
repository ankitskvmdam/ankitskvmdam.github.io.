import React from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { useAppStore } from "~/app-store";
import { useReducedMotion } from "~/hooks/use-reduced-motion";
import { cn } from "~/lib/utils";

/**
 * The shader animates itself off `u_time`, so `speed` is the only motion
 * control. Zero freezes it, which is how the header pauses.
 */
const SPEED = 1;

export type TGrainHeaderShape =
  "wave" | "dots" | "truchet" | "corners" | "ripple" | "blob" | "sphere";

/** True while any part of `ref` is on screen. */
function useIsOnScreen(ref: React.RefObject<HTMLElement | null>) {
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting),
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
}

export type TProjectGrainHeaderProps = React.PropsWithChildren<{
  /** Gives each write-up a visually distinct header. */
  shape?: TGrainHeaderShape;
  className?: string;
}>;

/**
 * The header of a project write-up: its title block sitting on an animated
 * grain gradient.
 *
 * Greyscale on purpose. The site's palette is neutral, the shader's own presets
 * are heavily saturated, and the ramp has to stay near the page background so
 * the text on top of it keeps its contrast.
 */
export function ProjectGrainHeader(props: TProjectGrainHeaderProps) {
  const { shape = "wave", children, className } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useAppStore((state) => state.theme);
  const prefersReducedMotion = useReducedMotion();
  const isOnScreen = useIsOnScreen(containerRef);

  const palette = React.useMemo(() => {
    // Both ramps stay close to their page background. A wide ramp turns the
    // panel into a slab that outshouts the title sitting on it.
    if (theme === "light") {
      return {
        colorBack: "#ededed",
        colors: ["#ffffff", "#e2e2e2", "#c8c8c8", "#ababab"],
      };
    }

    // The light end is capped at #3a3a3a. Any brighter and the foreground
    // token (#aaaaaa) drops under 4.5:1 where the gradient peaks.
    return {
      colorBack: "#1a1a1a",
      colors: ["#1f1f1f", "#282828", "#313131", "#3a3a3a"],
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-layer-0 relative w-full overflow-hidden rounded-xl",
        className,
      )}
    >
      {/*
        Decorative only. It sits behind the header text, so it is hidden from
        assistive tech and cannot swallow clicks on anything above it.
      */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <GrainGradient
          width="100%"
          height="100%"
          fit="cover"
          shape={shape}
          softness={0.5}
          intensity={0.5}
          noise={0.25}
          scale={1}
          speed={isOnScreen && !prefersReducedMotion ? SPEED : 0}
          {...palette}
        />
      </div>

      <div className="relative z-10 px-5 py-10 md:px-10 md:py-14">
        {children}
      </div>
    </div>
  );
}
