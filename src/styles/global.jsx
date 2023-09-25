import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    body: {
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        // backgroundImage:
        //     "radial-gradient(circle, rgba(12,48,91,1) 0%, rgba(33,56,80,1) 45%, rgba(57,50,89,1) 100%)",
        backgroundImage:
            "linear-gradient(180deg, rgba(34,47,95,1) 0%, rgba(78,58,117,1) 46%, rgba(138,72,126,1) 100%)",
    },
})

export default GlobalStyles
