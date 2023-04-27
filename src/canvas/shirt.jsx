import { Decal, useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import * as THREE from "three"

export default function Shirt() {
    const { nodes, materials } = useGLTF("/shirt_baked.glb")

    useFrame((state, delta) => {
        easing.dampC(materials.lambert1.color, "#EFBD48", 0.25, delta)
    })

    return (
        <group key={Date.now()}>
            <mesh
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            />
        </group>
    )
}
