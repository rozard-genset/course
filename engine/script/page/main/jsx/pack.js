console.log('Module : page : deffers page course javascript engine loaded');

// LEARNING PLAN
let init_plan = ()=> {
    if ( window.innerWidth > 1024 ) {
        let element = document.querySelector( '.learnplan' );
        let activet = element.querySelector('a.active');
        let targets = activet.getAttribute('data-open');
        element.querySelector("#"+targets).classList.remove('close'); 
    }
    open_plan();
   
}

let exit_plan = ()=> {
    let element = document.querySelector( '.learnplan' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.parted'));
    activet.forEach( active => {
        if ( ! active.classList.contains('.close')) {
            active.classList.add('close');
        }
    })
}

let open_plan = ()=> {
    let element = document.querySelector( '.learnplan' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.open-subdiv'));
    activet.forEach( button => {
        button.addEventListener('click', ()=> {
            exit_plan();
            let targets = button.getAttribute('data-open');
            element.querySelector("#"+targets).classList.remove('close');
            element.querySelector("#"+targets).parentNode.scrollIntoView(); 
        });
    });
}


let init_tabs = ()=> {
    let action_open = document.querySelectorAll(".tab-action");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = document.querySelectorAll(".tabs-item");
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

window.addEventListener( 'load', ()=> {
    init_plan();
    init_tabs(); 
});