import { clear } from "./clear.js";

export function menu(){
    clear();
    
    const container = document.getElementById('content');

    const menu = document.createElement('h2');
    const text = document.createElement('p');

    menu.classList.add('tabTitle');
    text.classList.add('summary');

        
    menu.innerText = 'Our Menu';
    text.innerText = 'Item Example \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\ Price: $ 6,45 \n\n'  + 
                     'Item Example \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\ Price: $ 10,00 \n\n'  +
                     'Item Example \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\ Price: $ 3,90 \n\n'  +
                     'Item Example \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\ Price: $ 8,00 \n\n'  +
                     'Item Example \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\ Price: $ 23,00 \n\n'  ;

    container.appendChild(menu);
    container.appendChild(text);
}