console.log('Module : page : deffers page course javascript engine loaded');





let task_tabs = ()=> {


    let tabscourses = document.getElementById('test');
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

    document.getElementById( 'start-task' ).addEventListener('click', ()=> {
        let task = document.getElementById('info');
        let load = document.getElementById('load');
        task.classList.add('hide');
        load.classList.remove('hide');
    }, false );
} 


window.addEventListener( 'load', ()=> {

    task_tabs();
    task_asig();
});