var toggle_button;
var container;
const main = document.querySelector('main');

let dark = false;

const toggleAnimation = () => {
    dark = !dark;

    let clone = container.cloneNode(true);

    if (dark) {
        clone.classList.remove('light');
        clone.classList.add('dark');
    } else {
        clone.classList.remove('dark');
        clone.classList.add('light');
    }

    clone.classList.add('copy')
    document.body.appendChild(clone);
    document.body.classList.add('stop-scrolling')
    clone.addEventListener('animationend', () => {
        document.body.classList.remove('stop-scrolling');
        container.remove();
        clone.classList.remove('copy');
        
        declare();
        events();
    })
    
}

const declare = () => {
    toggle_button = document.querySelector('.toggle-btn');
    container = document.querySelector('.container');
}


const events = () => {
    toggle_button.addEventListener('click', toggleAnimation);
}

declare();
events();

