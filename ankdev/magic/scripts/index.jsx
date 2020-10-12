import "../stylesheet/main.scss";
import handleScreen from "./handleScreen";
import createTimeline from "./timeline";
import scrollEvent from "./scrollEvent"

const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementsByTagName("BODY")[0];

// let previous_height = 0;
function setSectionHeight(){

    // if(previous_height == 0 || Math.abs( previous_height - window.innerHeight ) > 100){
        const { innerHeight } = window;
        const ele = document.querySelectorAll('.section-container');
        const nav = document.querySelector('#navbar');
        const nav_height = nav.getBoundingClientRect().height;
        const minHeight = (window.innerWidth > 400) 
            ? innerHeight - nav_height - 20: 0
        for(let i = 0; i < ele.length; i++){
            ele[i].style.minHeight = minHeight
        }

    // }
        
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
    body.classList.add("theme-light");
    addEventListerForHeightChange();
    light.addEventListener('click', changeTheme);
    dark.addEventListener('click', changeTheme);
    handleScreen();
    createTimeline();
    // scrollEvent()
}

init()