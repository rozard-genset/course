console.log('Module : page : deffers page course javascript engine loaded');


let init_plan = ()=> {
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


let init_talk = ()=> {

    let darkmod = localStorage.getItem( 'darkmode' );
    let contain = document.querySelector( '#forum-collumn' );
    let frameid = contain.getAttribute('data-title');;
    let telebox = document.createElement( 'script' );

    telebox.src = 'https://comments.app/js/widget.js?3';
    telebox.setAttribute('data-comments-app-website', '_-K1zvYW');
    telebox.setAttribute('data-limit', 5 );
    telebox.setAttribute('title', frameid );
    telebox.setAttribute('data-dislikes', 1 );

    if ( darkmod == 2 ) {
        telebox.setAttribute('data-dark', 1 );
    }
    else if ( darkmod == 3 ) {
        telebox.setAttribute('data-dark', 0 );
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        telebox.setAttribute('data-dark', 1 );
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {
        telebox.setAttribute('data-dark', 0 );
    }
    else {
        telebox.setAttribute('data-dark', 0 );
    }
    contain.appendChild(telebox);
}


let init_bugs = ()=> {

    if (document.querySelector('.utterances-frame')) {

        let modes = localStorage.getItem("darkmode");
        let theme = 'github-light';

        if ( modes == 3 ) {
            theme = 'github-light';
        }
        else if ( modes == 2 ) {
            theme = 'dark-blue';
        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            theme = 'dark-blue';
        }
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ) {
            theme = 'github-light';
        }
        else {
            theme = 'github-light';
        }
  
        let message = {
            type: 'set-theme',
            theme: theme
        };
        
        let iframe = document.querySelector('.utterances-frame');
        iframe.contentWindow.postMessage(message, 'https://utteranc.es');
    }
}
 

window.addEventListener( 'load', ()=> {
    init_plan();
    init_tabs();
    // init_bugs();
    // init_talk();
});