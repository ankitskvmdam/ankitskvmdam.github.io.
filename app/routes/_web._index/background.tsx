import { Canvas } from "@react-three/fiber";
import { Lines } from "./lines";
import React, { useMemo } from "react";
import { useSearchParams } from "@remix-run/react";
import { THEME_SEARCH_PARAM } from "~/constants/searchparams";

export function Background() {
  const radius = React.useRef(globalThis.innerWidth);
  const [searchParams] = useSearchParams();

  const colors = useMemo(() => {
    const isLightTheme = searchParams.get(THEME_SEARCH_PARAM) !== "dark";

    if (isLightTheme) {
      return ["#f5f5f5", "#f9f9f9", "#fafafa"];
    }

    return ["#252525", "#282828"];
  }, [searchParams]);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Lines dash={0.4} count={10} radius={radius.current} colors={colors} />
    </Canvas>
  );
}
