import { clear } from "./clear.js";

export function summary(){
    clear();
    
    const container = document.getElementById('content');

    const welcome = document.createElement('h2');
    const text = document.createElement('p');

    welcome.classList.add('tabTitle');
    text.classList.add('summary');

        
    welcome.innerText = 'Welcome';
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    container.appendChild(welcome);
    container.appendChild(text);
}
