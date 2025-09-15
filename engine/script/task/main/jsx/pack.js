
let main_tabs = () => {
    
    let actions = Array.prototype.slice.call( document.querySelectorAll( '.base-actions' ) );
    let content = Array.prototype.slice.call( document.querySelectorAll( '.base-content' ) );

    actions.forEach( action => {
        
        action.addEventListener('click', ( event )=> {
            let target = action.getAttribute('data-target');

            content.forEach( now => {
                now.classList.remove('open');
            });
            actions.forEach( now => {
                now.classList.remove('open');
            })

            document.getElementById(target).classList.add('open');
            action.classList.add('open');
        })
    })

}

let mode_tabs = () => {
    let parents = Array.prototype.slice.call( document.querySelectorAll( '.switch' ) );
    parents.forEach( parent => {

        let actions = Array.prototype.slice.call( parent.querySelectorAll( '.actions' ) );
        let content = Array.prototype.slice.call( parent.querySelectorAll( '.content' ) );

        actions.forEach( action => {
            action.addEventListener('click', ( event )=> {
                let target = action.getAttribute('data-target');
                content.forEach( now => {
                    now.classList.remove('open');
                });
                actions.forEach( now => {
                    now.classList.remove('open');
                })
                document.getElementById(target).classList.add('open');
                action.classList.add('open');
            });
        });
    });

}


window.addEventListener('load', ()=> {
    main_tabs();
    mode_tabs();
})