import { PAGE_THROTTLE_TIME } from "./constant"
import throttle from "./throttle"

var pageData = {
    currentPageIndex: 0,
    totalPage: 1,
    isTransition: false,
}

var pages = []

function showPage(idx, idx2) {
    var nextPageButton = document.querySelector("#next-page")
    var prevPageButton = document.querySelector("#prev-page")
    var pageTitleWrapper = document.querySelector(
        ".bottom-bar .page-title-wrapper"
    )

    pageTitleWrapper.style.transform = "translateY(-" + idx * 22 + "px)"

    pages.forEach(function (page) {
        page.setAttribute("data-iscurrent", "false")
        page.style.display = "none"
    })

    pages[idx].setAttribute("data-iscurrent", "true")
    pages[idx].style.display = "block"

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

function showNextPage() {
    if (pageData.isTransition) return

    if (pageData.currentPageIndex < pageData.totalPage - 1) {
        pageData.isTransition = true
        showPage(pageData.currentPageIndex + 1)
        pageData.currentPageIndex += 1
    }
}

function showPrevPage() {
    if (pageData.isTransition) return

    if (pageData.currentPageIndex > 0) {
        pageData.isTransition = true
        showPage(pageData.currentPageIndex - 1)
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
    if (event.deltaY > 0) {
        showNextPage()
        return
    }

    if (event.deltaY < 0) {
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

    showPage(0)
}

export { setupPage, addListenerToNavigationButtons, addWheelListenerOnPage }
