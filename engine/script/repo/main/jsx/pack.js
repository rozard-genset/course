console.log('Module : page : deffers page course javascript engine loaded');


let init_plan = ()=> {

    ( screen.width > 1024 ) ? document.getElementById('course').setAttribute( 'data-repo', 'open' ) : "";
    ( screen.width > 1024 ) ? document.querySelector('#snip .toggle').setAttribute( 'data-repo', 'open' ) : "";

    let element = document.querySelector( '#plan .leaf' );
    let activet = Array.prototype.slice.call(element.querySelectorAll('.opening'));
    let partion = Array.prototype.slice.call(element.querySelectorAll('.parted'));

    activet.forEach( button => {

        button.addEventListener('click', ()=> {

            let targets = button.getAttribute('data-open');
            targets = element.querySelector("#"+targets);

            if ( targets.classList.contains( 'close' ) ) {

                partion.forEach( active => {
                    ( ! active.classList.contains('.close')) ? active.classList.add('close') : '';
                })
                targets.classList.remove('close');
                targets.parentNode.scrollIntoView(); 
            }
            else {
                targets.classList.add('close');
            }
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
            ( screen.width < 1024  ) ? snip_exit( parent ) : "";
        })
    })
}


let snip_menu = ( parent ) => {
    let target = document.getElementById('course');
    let status = target.getAttribute('data-repo');
    ( status == 'open' ) ? target.setAttribute( 'data-repo', 'close' ) : target.setAttribute( 'data-repo', 'open' );
    ( status == 'open' ) ? parent.setAttribute( 'data-repo', 'close' ) : parent.setAttribute( 'data-repo', 'open' );
}   


let snip_exit = ( parent ) => {

    let toggle = Array.prototype.slice.call( parent.querySelectorAll('.toggle') );
    toggle.forEach(( item )=> {
        item.setAttribute( 'data-repo', 'close' );
        document.getElementById('course').setAttribute( 'data-repo', 'close' );
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