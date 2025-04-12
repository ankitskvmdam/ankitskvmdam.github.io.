import React from "react";
import { extend, useFrame } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

export type TFatlineProps = {
  /**
   * Color of the line
   */
  color: string;
  /**
   * Width of the line
   */
  width: number;
  /**
   * Speed at with the line move.
   */
  speed: number;
  /**
   * Line curve points.
   */
  curve: number[];
  /**
   * Line dash width
   */
  dash: number;
};

type ThreeJSMesh = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[],
  Object3DEventMap
>;

export function Fatline(props: TFatlineProps) {
  const { color, width, speed, curve, dash } = props;
  const ref = React.useRef<ThreeJSMesh>(null);

  useFrame((_, delta) => {
    if (!ref || !ref.current || !ref.current.material) return;
    const material = ref.current.material as MeshLineMaterial;
    material.dashOffset -= (delta * speed) / 10;
  });

  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial
        transparent
        lineWidth={width}
        color={color}
        depthWrite={false}
        dashArray={0.25}
        dashRatio={dash}
        toneMapped={false}
      />
    </mesh>
  );
}
