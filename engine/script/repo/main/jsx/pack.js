console.log('Module : page : deffers page course javascript engine loaded');


let init_plan = ()=> {

    if ( ! document.getElementById('repo') ){
        return;
    }

    let element = document.querySelector( '#plan .leaf' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.opening'));
    let partion = Array.prototype.slice.call(element.querySelectorAll('.parted'));

    activet.forEach( button => {
        button.addEventListener('click', ()=> {
 
            let targets = button.getAttribute('data-open');
 
            partion.forEach( active => {
                if ( ! active.classList.contains('.close')) {
                    active.classList.add('close');
                }
            })

            element.querySelector("#"+targets).classList.remove('close');
            element.querySelector("#"+targets).parentNode.scrollIntoView(); 
        });
    });
}


let init_snip = () => {

    let parent = document.getElementById('snip');
    let toggle = Array.prototype.slice.call( parent.querySelectorAll('.toggle') );
    let tabbed = Array.prototype.slice.call( parent.querySelectorAll('.tabbed') );

    toggle.forEach(( item )=> {
        item.addEventListener('click', ()=> {
            let target = item.getAttribute('data-action');
            if ( target == 'open-plan' ) {
                snip_menu( item );
            }
        })
    })

    tabbed.forEach(( item )=> {
        item.addEventListener('click', ()=> {
            let target = item.getAttribute('data-action');
            tabbed.forEach(( elem ) => {
                elem.classList.remove('open');
            })
            item.classList.add('open')
            snip_tabs( target );
            snip_exit( parent );
        })
    })
}


let snip_menu = ( parent ) => {
    let target = document.getElementById('relay');
    let status = target.getAttribute('data-menu');
    ( status == 'open' ) ? target.setAttribute( 'data-menu', 'close' ) : target.setAttribute( 'data-menu', 'open' );
    ( status == 'open' ) ? parent.setAttribute( 'data-menu', 'close' ) : parent.setAttribute( 'data-menu', 'open' );
}   


let snip_exit = ( parent ) => {

    let toggle = Array.prototype.slice.call( parent.querySelectorAll('.toggle') );
    toggle.forEach(( item )=> {
        item.setAttribute( 'data-menu', 'close' );
        document.getElementById('relay').setAttribute( 'data-menu', 'close' );
    })
}


let snip_tabs = ( parent ) => {
  
    let content = Array.prototype.slice.call( document.querySelectorAll( '.page-tab' ) );
    let targets = document.getElementById( parent )
    
    content.forEach(( item )=> {
        item.classList.remove('open');
        targets.classList.add('open')
    })
}


window.addEventListener( 'load', ()=> {
    init_snip();
    init_plan();
});