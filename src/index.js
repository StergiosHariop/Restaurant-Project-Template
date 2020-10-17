import { summary } from "./summary.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";


function display(){
    const container = document.getElementById('content');

    const header = document.createElement('header');
    const title = document.createElement('h1');
    const tabs = document.createElement('div');


    const tab1 = document.createElement('button');
    const tab2 = document.createElement('button');
    const tab3 = document.createElement('button');

    tabs.classList.add('tabs');
    tab1.classList.add('buttons');
    tab2.classList.add('buttons');
    tab3.classList.add('buttons');

    tab1.innerText = 'Summary';
    tab2.innerText = 'Menu';
    tab3.innerText = 'Contact';
    title.innerText = 'Restaurant \n Template';

    tab1.addEventListener('click', summary);
    tab2.addEventListener('click', menu);
    tab3.addEventListener('click', contact);



    header.appendChild(title);
    container.appendChild(header);

    container.appendChild(tabs);
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3); 

}

display();