import { clear } from "./clear.js";

export function contact(){
    clear();

    const container = document.getElementById('content');

    const welcome = document.createElement('h2');
    const text = document.createElement('p');

    welcome.classList.add('tabTitle');
    text.classList.add('summary');

        
    welcome.innerText = 'Contact Us';
    text.innerText = 'Address: Keas 69 Str. \n 15234, Chalandri \n Athens,Greece' + 
    '+30-2106019311 (landline) \n ' +
    '+30-6977664062 (mobile phone)\n' + 
    '+30-2106398905 (fax)';


    container.appendChild(welcome);
    container.appendChild(text);
}