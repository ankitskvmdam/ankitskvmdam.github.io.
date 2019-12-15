import "../stylesheet/main.scss";
import handleScreen from "./handleScreen";
import createTimeline from "./timeline";
import scrollEvent from "./scrollEvent"

const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementsByTagName("BODY")[0];

let previous_height = 0;
function setSectionHeight(){

    if(previous_height == 0 || Math.abs( previous_height - window.innerHeight ) > 100){
        previous_height = window.innerHeight;
        const ele = document.getElementsByClassName('section-container');
        const nav = document.getElementById('navbar');
        const nav_height = nav.getBoundingClientRect().height;
        for(let i = 0; i < ele.length; i++){
            ele[i].style.minHeight = previous_height - nav_height;
        }

    }
}

function addEventListerForHeightChange(){
    setSectionHeight();
    window.addEventListener('resize', setSectionHeight);
}

function changeTheme(event){
    light.classList.remove('active');
    dark.classList.remove('active');
    body.classList.remove("theme-dark", "theme-light");
    
    switch(event.currentTarget.id){
        case "light": 
            light.classList.add('active');
            body.classList.add("theme-light");
            break;
        default:
            dark.classList.add("active");
            body.classList.add("theme-dark");
    }
}

function init(){
    body.classList.add("theme-dark");
    addEventListerForHeightChange();
    light.addEventListener('click', changeTheme);
    dark.addEventListener('click', changeTheme);
    handleScreen();
    createTimeline();
    scrollEvent()
}

init()