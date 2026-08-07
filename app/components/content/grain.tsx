import React from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { useAppStore } from "~/app-store";
import { useReducedMotion } from "~/hooks/use-reduced-motion";
import { cn } from "~/lib/utils";

/**
 * The shader animates itself off `u_time`, so `speed` is the only motion
 * control. Zero freezes it, which is how a Grain pauses.
 */
const SPEED = 1;

export type TGrainShape =
  | "wave"
  | "dots"
  | "truchet"
  | "corners"
  | "ripple"
  | "blob"
  | "sphere";

export const DEFAULT_GRAIN_SHAPE: TGrainShape = "wave";

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

export type TGrainProps = {
  shape?: TGrainShape;
  className?: string;
};

/**
 * An animated grain gradient that fills whatever box it is given.
 *
 * Greyscale on purpose. The site's palette is neutral, the shader's own presets
 * are heavily saturated, and the ramp has to stay near the page background so
 * anything drawn on top of it keeps its contrast.
 *
 * It stops animating while off screen or when the visitor has asked for reduced
 * motion, so a page can hold several of these without burning battery.
 */
export function Grain(props: TGrainProps) {
  const { shape = DEFAULT_GRAIN_SHAPE, className } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useAppStore((state) => state.theme);
  const prefersReducedMotion = useReducedMotion();
  const isOnScreen = useIsOnScreen(containerRef);

  const palette = React.useMemo(() => {
    // Both ramps stay close to their page background. A wide ramp turns the
    // panel into a slab that outshouts anything sitting on it.
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
    // Decorative, so it is hidden from assistive tech and cannot swallow
    // clicks on anything layered above it.
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
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
  );
}
