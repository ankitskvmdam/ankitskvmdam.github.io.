function handleChange(){
    const html = document.getElementsByTagName("HTML")[0]
    if( window.innerWidth > 1280){
        html.style.fontSize = (16/1280) * window.innerWidth + 'px'
    }

    else {
        html.style.fontSize = "16px"
    }
}

function handleScreen(){
    window.addEventListener('resize', handleChange)
}

export default handleScreen;