// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components"
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro"

const GlobalStyles = createGlobalStyle({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
})

export default GlobalStyles
