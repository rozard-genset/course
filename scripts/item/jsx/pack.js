console.log('deffers course javascript engine loaded');

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
