var themeLocalStorageKey = "theme"

var localStorage = window.localStorage

function getTheme() {
    var body = document.body

    return body.getAttribute("data-theme")
}

function updateTheme(theme) {
    var body = document.body
    var svgUse = document.querySelector(".theme-svg-use")
    var icon = theme === "dark" ? "#light-theme-icon" : "#dark-theme-icon"

    body.setAttribute("data-theme", theme)
    body.classList.remove("dark", "light")
    body.classList.add(theme)

    svgUse.setAttribute("xlink:href", icon)

    localStorage.setItem(themeLocalStorageKey, theme)
}

function toggleTheme() {
    var body = document.body
    var theme = body.getAttribute("data-theme")

    var newTheme = theme === "dark" ? "light" : "dark"

    updateTheme(newTheme)
}

function init() {
    var theme = getTheme()

    var themeStoredInLocalStorage = localStorage.getItem(themeLocalStorageKey)

    if (themeStoredInLocalStorage) {
        if (theme === themeStoredInLocalStorage) {
            return
        }

        updateTheme(themeStoredInLocalStorage)
    } else {
        localStorage.setItem(themeLocalStorageKey, theme)
    }
}

function setupToggleTheme() {
    init()
    var themeToggleButton = document.querySelector(".theme-toggle")

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme)
    }
}

export default setupToggleTheme
