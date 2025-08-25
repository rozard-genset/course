console.log( 'Module : deffers main course javascript engine loaded' );


let main_tabs = ()=> {
    let action_open = document.querySelectorAll(".base-action");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = document.querySelectorAll(".base-item");
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


let node_tabs = ()=> {
    let parent_elem = document.getElementById('node');
    let action_open = parent_elem.querySelectorAll(".node-action");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = parent_elem.querySelectorAll(".node-item");
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


let part_tabs = ()=> {

    if (window.innerWidth > 1024 ) {
       return;
    } 

    let parent_elem = document.getElementById('part');
    let action_open = parent_elem.querySelectorAll(".dropdown");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = parent_elem.querySelectorAll(".dropboxs");
    let mantab_aray = Array.prototype.slice.call(mantab_open);

    action_aray.forEach( (event) => {

        event.addEventListener('click', ()=> {

            let target = event.getAttribute('data-target');

            if (event.classList.contains('open')) {
                event.classList.remove('open');
                document.getElementById(target).classList.remove('open'); 
            }  
            else {

                action_aray.forEach( (event)=> {
                    event.classList.remove('open');
                });

                mantab_aray.forEach( (event)=> {
                    event.classList.remove('open');
                });

                event.classList.add('open');
                document.getElementById(target).classList.add('open'); 
            }
        }) 
    });
}

let task_tabs = ()=> {

    if (window.innerWidth > 1024 ) {
       return;
    } 

    let parent_elem = document.getElementById('task');
    let action_open = parent_elem.querySelectorAll(".dropdown");
    let action_aray = Array.prototype.slice.call(action_open);
    let mantab_open = parent_elem.querySelectorAll(".dropboxs");
    let mantab_aray = Array.prototype.slice.call(mantab_open);

    action_aray.forEach( (event) => {

        event.addEventListener('click', ()=> {

            let target = event.getAttribute('data-target');

            if (event.classList.contains('open')) {
                event.classList.remove('open');
                document.getElementById(target).classList.remove('open'); 
            }  
            else {

                action_aray.forEach( (event)=> {
                    event.classList.remove('open');
                });

                mantab_aray.forEach( (event)=> {
                    event.classList.remove('open');
                });

                event.classList.add('open');
                document.getElementById(target).classList.add('open'); 
            }
        }) 
    });
}

window.addEventListener('load', ()=> {
    main_tabs();
    node_tabs();
    part_tabs();
    task_tabs();
})