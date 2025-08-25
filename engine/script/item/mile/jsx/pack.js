console.log('deffers paid course javascript engine loaded');

let plan_tabs = ()=> {
    let plansession = Array.prototype.slice.call(document.querySelectorAll('.period'));

    plansession.forEach((item)=> {


        let action_open = item.querySelectorAll(".tab-action");
        let action_aray = Array.prototype.slice.call(action_open);
        let mantab_open = item.querySelectorAll(".tabs-item");
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
    })
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

window.addEventListener('load', ()=> {
    plan_tabs();
    main_tabs();
    node_tabs();
})