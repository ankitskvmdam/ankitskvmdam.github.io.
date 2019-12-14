import "../stylesheet/main.scss"
import handleScreen from "./handleScreen"
import createTimeline from "./timeline"

const light = document.getElementById("light")
const dark = document.getElementById("dark")
const body = document.getElementsByTagName("BODY")[0]

function changeTheme(event){
    light.classList.remove('active')
    dark.classList.remove('active')
    body.classList.remove("theme-dark", "theme-light")
    
    switch(event.currentTarget.id){
        case "light": 
            light.classList.add('active')
            body.classList.add("theme-light")
            break
        default:
            dark.classList.add("active")
            body.classList.add("theme-dark")
    }
}

function init(){
    body.classList.add("theme-dark")

    light.addEventListener('click', changeTheme)
    dark.addEventListener('click', changeTheme)
    handleScreen()
    createTimeline()
}

init()