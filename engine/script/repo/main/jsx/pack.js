console.log('Module : page : deffers page course javascript engine loaded');


let init_plan = ()=> {

    if ( ! document.getElementById('main') ){
        return;
    }

    if ( window.innerWidth > 1024 ) {
        let element = document.querySelector( '#plan .list' );
        let activet = element.querySelector('a.active');
        let targets = activet.getAttribute('data-open');
        element.querySelector("#"+targets).classList.remove('close'); 
    }

    open_plan();
}


let exit_plan = ()=> {
    let element = document.querySelector( '#plan .list' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.parted'));
    activet.forEach( active => {
        if ( ! active.classList.contains('.close')) {
            active.classList.add('close');
        }
    })
}


let open_plan = ()=> {
    let element = document.querySelector( '#plan .list' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.opening'));
    activet.forEach( button => {
        button.addEventListener('click', ()=> {
            exit_plan();
            let targets = button.getAttribute('data-open');
            element.querySelector("#"+targets).classList.remove('close');
            element.querySelector("#"+targets).parentNode.scrollIntoView(); 
        });
    });
}


let main_tabs = ()=> {

    if ( ! document.getElementById('main') ){
        return;
    }


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


let task_tabs = ()=> {

    if ( ! document.getElementById('task') ){
        return;
    }

    let tabscourses = document.getElementById('task');
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


let task_asig = ()=> {

    if ( ! document.getElementById('task')) {
        return;
    }

    document.getElementById( 'start-task' ).addEventListener('click', ()=> {
        let task = document.getElementById('task');
        let load = document.getElementById('load');
        task.classList.add('hide');
        load.classList.remove('hide');
    }, false );
} 


window.addEventListener( 'load', ()=> {

    console.log('load')
    init_plan();
    main_tabs();
    task_tabs();
    task_asig();
});