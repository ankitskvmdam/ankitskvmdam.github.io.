import './third-party/popper.min.js'
import './third-party/tippy-bundle.umd.min.js'

import "../styles/style.scss"

import {setupPage, addListenerToNavigationButtons, addWheelListenerOnPage} from './handle-pages.js'
import { addTooltip } from './tooltip.js'



function init() {
    addTooltip()
    setupPage()
    addListenerToNavigationButtons()
    addWheelListenerOnPage()
}

window.addEventListener('DOMContentLoaded', init)