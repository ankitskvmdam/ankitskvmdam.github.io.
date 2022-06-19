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

function setupIgnoreWheel() {
    var leftSide = document.querySelectorAll(".page-left")

    leftSide.forEach(function (page) {
        page.addEventListener("wheel", function (event) {
            if (page.scrollHeight !== page.getBoundingClientRect().height) {
                event.stopPropagation()
            }
        })
    })
}

export {
    setupPage,
    addListenerToNavigationButtons,
    addWheelListenerOnPage,
    setupIgnoreWheel,
}
