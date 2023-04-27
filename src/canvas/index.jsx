import { Canvas as FibreCanvas } from "@react-three/fiber"
import { Environment, Center, OrbitControls } from "@react-three/drei"

import Shirt from "./shirt"
import Camera from "./camera"
import Backdrop from "./backdrop"

export default function Canvas() {
    return (
        <FibreCanvas
            shadows
            camera={{ position: [0, 0, 2], fov: 25 }}
            style={{ width: "100vw", height: "100vh" }}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <Camera>
                <OrbitControls />
                <Backdrop />
                <Center>
                    <Shirt />
                </Center>
            </Camera>
        </FibreCanvas>
    )
}
