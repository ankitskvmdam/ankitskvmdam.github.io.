import './third-party/popper.min.js'
import './third-party/tippy-bundle.umd.min.js'

import "../styles/style.scss"


import throttle from './throttle'

function wheelFunction(event) {
    console.log('Event', event)
}


function initTooltip() {
    tippy('.theme-toggle', {
        content: 'Change theme',
    })
}


function init() {

    initTooltip()

    var viewWrapper = document.querySelector('#view-wrapper')

    var throttledWheen = throttle(wheelFunction, 3000)

    viewWrapper.addEventListener('wheel', throttledWheen)
}

window.addEventListener('DOMContentLoaded', init)