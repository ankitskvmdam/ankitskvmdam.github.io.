const start = 1994;
const end = new Date().getFullYear();

let target_div;
let previous_height = 0;
let window_width;
let current_scroll;
let dragged_element;
let dragged_start;
let dragged_end;
let drag_active = false;

// for touch event
let scroll_start;
let scroll_end;
let scroll_amount = 0;
let scroll_active = false;

let events = [
    {
        year: 1997,
        title: 'Born, 1997',
        desc: 'The Year I was born :)',
        height: "medium",
        align: "left"
    },
    {
        year: 2003,
        title: 'School, 2003',
        desc: 'First day at school.',
        height: "high",
        align: "left"
    },
    {
        year: 2004,
        title: 'Computers, 2004',
        desc: 'First introduction with computers',
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
        title: 'Software, 2015',
        desc: 'Made a banking software using c++.',
        height: "medium",
        align: "left"
    },
    {
        year: 2016,
        title: 'Leopard, 2016',
        desc: 'Terminal based spreadsheet',
        height: "medium",
        align: "right"
    },
    {
        year: 2017,
        title: 'August, 2017',
        desc: 'Got admission in National Institute of Technology, Durgapur',
        height: "high",
        align: "left"
    },
    {
        year: 2018,
        title: 'Instruo, 2018',
        desc: 'Build website for Technical fest.',
        height: "low",
        align: "left"
    },
    {
        year: 2019,
        title: 'clean-jsdoc-theme, 2019',
        desc: 'Publish first npm package',
        height: "high",
        align: "right"
    },
    {
        year: 2020,
        title: 'Anu, 2020',
        desc: 'ML models for predicting protein-protein interactions.',
        height: "low",
        align: "right"
    },
]

function setWindowWidth(){
    window_width = window.innerWidth;
}

function setTimeLineHeight(){
    if(previous_height == 0 || Math.abs(previous_height - window.innerHeight) > 150){
        previous_height = window.innerHeight;
        target_div.style.height = (previous_height/24) + 'rem'
    }
}

function setTimeLineWidth(){
    target_div.style.width = target_div.scrollWidth/16 + 'rem' 
}

function onWindowResize(){
    setWindowWidth();
    setTimeLineHeight();
    setTimeLineWidth();
}

function scrollLeft(amount){
    let scroll_amount = current_scroll - ((amount != undefined && !isNaN(amount)) ? amount : window_width/1.2);
    scroll_amount = (scroll_amount > 0) ? scroll_amount : 0;
    target_div.style.transform = `translateX(-${scroll_amount}px)`
    current_scroll = scroll_amount;
}

function scrollRight(amount){
    let max_scroll = target_div.scrollWidth;
    let scroll_amount = current_scroll + ((amount !=undefined && !isNaN(amount)) ? amount: window_width/1.2);
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


function onDragStart(event){
    dragged_element = event.target;
    dragged_start = event.clientX || event.touches[0].clientX;
    scroll_start = event.touches && event.touches[0].clientY || 0;
    dragged_element.style.transition = '0s';
    
    if(target_div == event.target) drag_active = true

    return false;
}

function onDrag(event){
    event.preventDefault()
    if(drag_active == true){
        dragged_end = event.clientX || event.touches[0].clientX;
        const scroll_amount = dragged_start - dragged_end;
        dragged_start = dragged_end;
    
        if(scroll_amount < 0) scrollLeft(Math.abs(scroll_amount))
        else scrollRight(Math.abs(scroll_amount))
    }

    scroll_end = event.touches && event.touches[0].clientY || 0;
    scroll_amount = scroll_end - scroll_start;

    if(Math.abs(scroll_amount) > 20 || scroll_active){
        scroll_active = true;
        scroll_start = scroll_end;
        window.scrollBy(0, -scroll_amount);
    }

    return false;
}

function onDragEnd() {
    if (dragged_element) {
        
        dragged_element.style.transition = null;
        drag_active = false;
    
        if(scroll_active){
            scroll_active = false;
        }
    }
    return false;
}

function addDragEvent(){
    target_div.addEventListener('mousedown',onDragStart, false);
    target_div.addEventListener('mousemove', onDrag, false);
    target_div.addEventListener('mouseup', onDragEnd, false);
    target_div.addEventListener('mouseout', onDragEnd, false);

    // target_div.addEventListener('touchstart',onDragStart, false);
    // target_div.addEventListener('touchmove', onDrag, false);
    // target_div.addEventListener('touchend', onDragEnd, false);
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
        setTimeLineWidth();
    }
}

export default createTimeline