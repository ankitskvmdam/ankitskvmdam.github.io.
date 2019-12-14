const start = 1990;
const end = new Date().getFullYear();

let target_div;
let window_width;
let current_scroll;

let events = [
    {
        year: 1997,
        title: '10th June, 1997',
        desc: 'I was born :)',
        height: "medium"
    },
    {
        year: 2003,
        title: 'April, 2003',
        desc: 'Got admission in UKG',
        height: "medium"
    }
]

function setWindowWidth(){
    window_width = window.innerWidth;
}

function onWindowResize(){
    setWindowWidth();
    target_div.style.height = (window.innerHeight/32) + 'rem'
}

function scrollLeft(){
    let scroll_amount = current_scroll - window_width/2;
    scroll_amount = (scroll_amount > 0) ? scroll_amount : 0;
    target_div.style.transform = `translateX(-${scroll_amount}px)`
    current_scroll = scroll_amount;
}

function scrollRight(){
    let max_scroll = target_div.scrollWidth;
    let scroll_amount = current_scroll + window_width/2;
    scroll_amount = (scroll_amount < max_scroll - window_width) ? scroll_amount : max_scroll-window_width;
    target_div.style.transform = `translateX(-${scroll_amount}px)`
    current_scroll = scroll_amount;
}

function addFunctionToControllers(){
    const next = document.getElementById("timeline-next");
    const prev = document.getElementById("timeline-prev");

    next.addEventListener('click', scrollRight);
    prev.addEventListener('click', scrollLeft);
}

function createYears(){
    let output = '<ol class="timeline-year-ol">';
    let i;
    for(i = start; i <= end; i++){
        output += `<li class="timeline-year-li">${i}</li>`;
    }

    output += "</ol>";
    target_div.innerHTML += output;
}

function setTimeLine(){
    const timeline_year_width = 5; //rem
    let output = '';
    for( let i = 0; i < events.length; i++){
        const distance = (events[i].year - start) * timeline_year_width;
        const height = (events[i].height == "medium") ? 10 : ((events[i].height == "high") ? 15 : 5);
        output += `
            <div class="timeline-event-div" style="transform: translateX(${distance}rem) translateY(-${height}rem)">
                <h4>${events[i].title}</h4>
                <p>${events[i].desc}<p>
            </div>
        `;

    }
    target_div.innerHTML += output
}


function init(){
    target_div = document.getElementById('timeline');
    target_div.style.height = (window.innerHeight/32) + 'rem'
    current_scroll = 0;
    setWindowWidth();
    window.addEventListener('resize', onWindowResize);
}

function createTimeline(){
    init()
    if(target_div != null ){
        addFunctionToControllers();
        createYears();
        setTimeLine();
    }
}

export default createTimeline