import { Canvas } from "@react-three/fiber";

export function LandingAirplaneScene() {
  return (
    <Canvas
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 12, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}
