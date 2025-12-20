import * as React from "react";

export const MOBILE_BREAKPOINT = 768;
export const TABLET_BREAKPOINT = 1024;
export const DESKTOP_BREAKPOINT = 1280;

export type TUseIsMobileOptions = {
  breakingPoint?: number;
};

export function useIsMobile(options: TUseIsMobileOptions = {}) {
  const { breakingPoint = MOBILE_BREAKPOINT } = options;

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakingPoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakingPoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < breakingPoint);
    return () => mql.removeEventListener("change", onChange);
  }, [options]);

  return !!isMobile;
}
