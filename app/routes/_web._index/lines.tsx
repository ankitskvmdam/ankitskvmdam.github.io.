import React from "react";
import { MathUtils, Vector3, CatmullRomCurve3 } from "three";
import { Fatline } from "./fat-line";

export type TLinesProps = {
  /**
   * Length of the dash.
   */
  dash: number;
  /**
   * Number of lines to show.
   */
  count: number;
  /**
   * Radius of the curve.
   */
  radius: number;
  /**
   * Line colors..
   */
  colors: string[];
  /**
   * Random function.
   */
  rand?: typeof MathUtils.randFloatSpread;
};

function random(radius: number) {
  // Screen range is -300 to 300
  return Math.min(Math.max(MathUtils.randFloatSpread(radius), -300), 300);
}

export function Lines(props: TLinesProps) {
  const { dash, count, colors, radius = 50, rand = random } = props;

  const lines = React.useMemo(() => {
    return Array.from({ length: count }, () => {
      const points = Array.from(
        { length: 10 },
        () => new Vector3(rand(radius), rand(radius), rand(radius)),
      );

      const curve = new CatmullRomCurve3(points).getPoints(300);

      return {
        color: colors[Math.floor(colors.length * Math.random())],
        width: Math.max(radius / 100, (radius / 50) * Math.random()),
        speed: Math.max(0.1, 0.5 * Math.random()),
        curve: curve.flatMap((point) => point.toArray()),
      };
    });
  }, [colors, count, radius]);

  return lines.map((props, idx) => (
    <Fatline key={idx} dash={dash} {...props} />
  ));
}
