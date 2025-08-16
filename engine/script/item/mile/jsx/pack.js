console.log('deffers paid course javascript engine loaded');


let plansession = Array.prototype.slice.call(document.querySelectorAll('.plan-session'));

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


