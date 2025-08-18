console.log('deffers home course javascript engine loaded');


console.log('deffers paid course javascript engine loaded');

let tabs_action = ()=> {

    if ( ! document.getElementById('tabs') ){
        return;
    }

    let tabscourses = document.getElementById('tabs');
    let action_open = tabscourses.querySelectorAll(".tab-action");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = tabscourses.querySelectorAll(".tabs-item");
    let mantab_aray = Array.prototype.slice.call(mantab_open);

    action_aray.forEach( (event) => {

        event.addEventListener('click', ()=> {

            let target = event.getAttribute('data-target');

            action_aray.forEach( (event)=> {
                event.classList.remove('open');
            });

            mantab_aray.forEach( (event)=> {
                event.classList.remove('open');
            });

            event.classList.add('open');
            document.getElementById(target).classList.add('open');        
        }) 
    });
}


let tabs_scroll = ()=> {

    if ( ! document.getElementById('tabs') ){
        return;
    }

    let prev = document.getElementById('prev-action');
    let next = document.getElementById('next-action');
    let bars = document.getElementById('tabs-action');

    prev.addEventListener('click', ()=> {
        bars.scrollLeft -= 20;
    });

    next.addEventListener('click', ()=> {
        bars.scrollLeft += 20; 
    });
}


window.addEventListener('load', ()=> {
    tabs_action();
    tabs_scroll();
})