var toggle_button;
var container;

let dark = false;

const declare = () => {
    toggle_button = document.querySelector('.toggle-btn');
    container = document.querySelector('.container');
}


const events = () => {
    toggle_button.addEventListener('click', toggleAnimation);
}

declare();
events();

const toggleAnimation = () => {
    dark = !dark;

    
}