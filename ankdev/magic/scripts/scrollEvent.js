function onScroll(){
    const scrollIcon = document.getElementById('icon-scroll')
    if(window.pageYOffset > 50)
        scrollIcon.style.opacity = 0;
    else {
        scrollIcon.style.opacity = 1;
    }
}

function addEvent(){
    window.addEventListener('scroll', onScroll)
}

function scrollEvent(){
    addEvent()
}

export default scrollEvent