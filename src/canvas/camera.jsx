import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import React from "react"

export default function Camera({ children }) {
    const groupRef = React.useRef()

    useFrame((state, delta) => {
        const isBreakingPoint = window.innerWidth <= 1200
        const isMobile = window.innerWidth <= 600

        const targetPosition = [0, 0, 0]

        // easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        easing.dampE(
            groupRef.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 3, 0],
            0.25,
            delta
        )
    })

    return <group ref={groupRef}>{children}</group>
}
