import { PAGE_THROTTLE_TIME } from "./constant"
import throttle from "./throttle"

var pageData = {
    currentPageIndex: 0,
    totalPage: 1,
    isTransition: false,
    lastWheelEventAt: 0,
}

var pages = []

function updateBottomBarTitle(idx) {
    var pageTitleWrapper = document.querySelector(
        ".bottom-bar .page-title-wrapper"
    )
    pageTitleWrapper.style.transform = "translateY(-" + idx * 22 + "px)"
}

function updateBottomBarNavigationButton(idx) {
    var nextPageButton = document.querySelector("#next-page")
    var prevPageButton = document.querySelector("#prev-page")

    if (nextPageButton && idx == pageData.totalPage - 1) {
        nextPageButton.classList.add("disabled")
    } else if (nextPageButton) {
        nextPageButton.classList.remove("disabled")
    }

    if (prevPageButton && idx == 0) {
        prevPageButton.classList.add("disabled")
    } else if (prevPageButton) {
        prevPageButton.classList.remove("disabled")
    }
}

function showPage(current, next, isNext) {
    pageData.isTransition = true

    updateBottomBarTitle(next)
    updateBottomBarNavigationButton(next)

    var currentPageClass = isNext ? "next-page-out" : "prev-page-out"
    var nextPageClass = isNext ? "next-page-in" : "prev-page-in"

    pages[current].classList.add(currentPageClass)

    setTimeout(() => {
        pages[current].style.display = "none"
        pages[current].classList.remove(currentPageClass)
        pages[next].style.display = "block"
        pages[next].classList.add(nextPageClass)
    }, 250)

    setTimeout(() => {
        pageData.isTransition = false
        pages[next].classList.remove(nextPageClass)
    }, 350)
}

function showNextPage() {
    if (pageData.isTransition) return

    if (pageData.currentPageIndex < pageData.totalPage - 1) {
        pageData.isTransition = true
        showPage(pageData.currentPageIndex, pageData.currentPageIndex + 1, true)
        pageData.currentPageIndex += 1
    }
}

function showPrevPage() {
    if (pageData.isTransition) return

    if (pageData.currentPageIndex > 0) {
        pageData.isTransition = true
        showPage(
            pageData.currentPageIndex,
            pageData.currentPageIndex - 1,
            false
        )
        pageData.currentPageIndex -= 1
    }
}

function addListenerToNavigationButtons() {
    var nextPage = document.querySelector("#next-page")
    var prevPage = document.querySelector("#prev-page")
    var throttledNextPage = throttle(showNextPage, PAGE_THROTTLE_TIME)
    var throttlePrevPage = throttle(showPrevPage, PAGE_THROTTLE_TIME)

    if (nextPage) {
        nextPage.addEventListener("click", throttledNextPage)
    }

    if (prevPage) {
        prevPage.addEventListener("click", throttlePrevPage)
    }
}

function handleWheelEvent(event) {
    var now = Date.now()
    if (now - pageData.lastWheelEventAt < 3000) {
        return
    }

    if (event.deltaY > 0) {
        pageData.lastWheelEventAt = now
        showNextPage()
        return
    }

    if (event.deltaY < 0) {
        pageData.lastWheelEventAt = now
        showPrevPage()
        return
    }
}

function addWheelListenerOnPage() {
    var viewWrapper = document.querySelector("#view-wrapper")
    var throttledWheelEvent = throttle(handleWheelEvent, PAGE_THROTTLE_TIME)

    if (viewWrapper) {
        viewWrapper.addEventListener("wheel", throttledWheelEvent)
    }
}

function setupPage() {
    pages = document.querySelectorAll(".page")
    pageData.totalPage = pages.length

    pages.forEach(function (page) {
        page.style.display = "none"
    })

    pages[0].style.display = "block"
}

var lastTimeWheeled = 0
var isLastTimeSet = false

function propagateEventIfWeCan(event) {
    var now = Date.now()

    if (isLastTimeSet) {
        lastTimeWheeled = Date.now()
        isLastTimeSet = true
    }

    if (now - lastTimeWheeled < 3000) {
        event.stopPropagation()
    } else {
        isLastTimeSet = false
    }
}

function setupIgnoreWheel() {
    var myProjects = document.querySelector(".my-projects-c")

    if (myProjects) {
        myProjects.addEventListener("wheel", function (event) {
            var rect = myProjects.getBoundingClientRect()

            /**
             * Here 4 means user has to scroll with some pressure.
             */
            if (
                event.deltaY > 4 &&
                myProjects.scrollTop + rect.height === myProjects.scrollHeight
            ) {
                propagateEventIfWeCan(event)
                return
            }

            if (event.deltaY < -4 && myProjects.scrollTop === 0) {
                propagateEventIfWeCan(event)
                return
            }

            event.stopPropagation()
        })
    }
}

export {
    setupPage,
    addListenerToNavigationButtons,
    addWheelListenerOnPage,
    setupIgnoreWheel,
}
