import "./third-party/popper.min.js"
import "./third-party/tippy-bundle.umd.min.js"

import "../styles/style.scss"

import {
    setupPage,
    addListenerToNavigationButtons,
    addWheelListenerOnPage,
    setupIgnoreWheel,
} from "./handle-pages.js"
import { addTooltip } from "./tooltip.js"
import setupToggleTheme from "./toggle-theme.js"

function init() {
    setupToggleTheme()
    addTooltip()
    setupPage()
    addListenerToNavigationButtons()
    addWheelListenerOnPage()
    setupIgnoreWheel()
}

window.addEventListener("DOMContentLoaded", init)
