const start = 1994;
const end = new Date().getFullYear();

let target_div;
let window_width;
let current_scroll;

let events = [
    {
        year: 1997,
        title: '10th June, 1997',
        desc: 'The day I was born :)',
        height: "medium",
        align: "left"
    },
    {
        year: 2003,
        title: 'April, 2003',
        desc: 'First day at school.',
        height: "high",
        align: "left"
    },
    {
        year: 2004,
        title: 'Computers, 2004',
        desc: 'First introduce with computers',
        height: "low",
        align: "right"
    },
    {
        year: 2008,
        title: 'Web, 2008',
        desc: 'Learn HTML and CSS.',
        height: "high",
        align: "right"
    },
    {
        year: 2012,
        title: 'Programming, 2012',
        desc: 'Build first computer game using unity engine.',
        height: "low",
        align: "left"
    },
    {
        year: 2015,
        title: 'Softwares, 2015',
        desc: 'Make a banking software using c++.',
        height: "high",
        align: "left"
    },
    {
        year: 2017,
        title: '1st August, 2017',
        desc: 'Got admission in National Institute of Technology, Durgapur',
        height: "low",
        align: "left"
    },
    {
        year: 2018,
        title: 'Instruo, 2018',
        desc: 'Build website for Technical fest.',
        height: "low",
        align: "right"
    },
    {
        year: 2019,
        title: 'clean-jsdoc-theme, 2019',
        desc: 'Publish first npm package',
        height: "high",
        align: "right"
    },
]

function setWindowWidth(){
    window_width = window.innerWidth;
}

function setTimeLineHeight(){
    target_div.style.height = (window.innerHeight/24) + 'rem'
}

function onWindowResize(){
    setWindowWidth();
    setTimeLineHeight();
}

function scrollLeft(){
    let scroll_amount = current_scroll - window_width/1.2;
    scroll_amount = (scroll_amount > 0) ? scroll_amount : 0;
    target_div.style.transform = `translateX(-${scroll_amount}px)`
    current_scroll = scroll_amount;
}

function scrollRight(){
    let max_scroll = target_div.scrollWidth;
    let scroll_amount = current_scroll + window_width/1.2;
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
        const distance = (events[i].year - start) * timeline_year_width - ((events[i].align == "left") ? 14 : 0);
        const height = (events[i].height == "medium") ? 10 : ((events[i].height == "high") ? 15 : 5);
        output += `
            <div class="timeline-event-div ${events[i].height} ${events[i].align}" style="transform: translateX(${distance}rem) translateY(-${height}rem)">
                <h4>${events[i].title}</h4>
                <p>${events[i].desc}<p>
            </div>
        `;

    }
    target_div.innerHTML += output
}

function onDrag(){
    console.log('Dragging')
}

function addDragEvent(){
    target_div.addEventListener('dragstart',onDrag)
}

function init(){
    target_div = document.getElementById('timeline');
    setTimeLineHeight();
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
        addDragEvent();
    }
}

export default createTimeline