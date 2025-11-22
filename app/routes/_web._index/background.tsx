import { Canvas } from "@react-three/fiber";
import { Lines } from "./lines";
import React, { useMemo } from "react";
import { useAppStore } from "~/app-store";

export function Background() {
  const radius = React.useRef(globalThis.innerWidth);
  const theme = useAppStore((state) => state.theme);

  const colors = useMemo(() => {
    if (theme === "light") {
      return ["#f5f5f5", "#eee"];
    }

    return ["#252525", "#282828"];
  }, [theme]);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Lines dash={0.4} count={2} radius={radius.current} colors={colors} />
    </Canvas>
  );
}
