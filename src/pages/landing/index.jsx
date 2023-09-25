import * as THREE from "three"

import {
    Center,
    Environment,
    OrbitControls,
    RandomizedLight,
    useGLTF,
} from "@react-three/drei"
import { Canvas, useGraph, useLoader } from "@react-three/fiber"
import React from "react"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export default function Landing() {
    const MoonMaterial = useLoader(MTLLoader, "/moon.mtl")
    const Moon = useLoader(OBJLoader, "/moon.obj", (loader) => {
        MoonMaterial.preload()
        loader.setMaterials(MoonMaterial)
    })

    const { nodes, materials } = useGLTF("/moon2.glb")

    console.log("Moon", nodes, materials)
    // const { nodes, materials } = useGraph(Moon)

    const fbx = useLoader(FBXLoader, "/moon.fbx")

    // console.log("Mo", MoonGLB)
    return (
        <Canvas
            style={{ height: "100vh", width: "100vw" }}
            camera={{
                fov: 70,
            }}
        >
            <OrbitControls />
            {/* <Environment preset="night" /> */}
            <Center>
                {/* <ambientLight intensity={0.2} />
                <hemisphereLight intensity={0.2} position={[10, 10, 10]} />
                <RandomizedLight intensity={0.2} position={[5, 5, 5]} /> */}
                <pointLight
                    intensity={1}
                    position={[10, 10, 10]}
                    // color="blue"
                />
                <pointLight
                    intensity={0.2}
                    position={[10, 10, 10]}
                    color="#FFD1C4"
                />
                <mesh
                    geometry={nodes.Cube.geometry}
                    material={
                        new THREE.MeshBasicMaterial({
                            wireframe: true,
                            color: "#007bff",
                        })
                    }
                />
                {/* <primitive object={MoonGLB.scene} /> */}
                {/* <primitive object={Moon} /> */}
            </Center>
        </Canvas>
    )
}
