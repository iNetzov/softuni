import { render } from '../node_modules/lit-html/lit-html.js';
import{ cats }from './catSeeder.js';
import {allCatsTemplate} from '../02.HTTP-Status-Cats/templates/catTemplate.js';

let allCatsSection = document.querySelector('#allCats');

render(allCatsTemplate(cats,toggleStatusCodeButton),allCatsSection);

function toggleStatusCodeButton(e){
    let button = e.target;
    button.textContnet = button.textContnet ==='Show status code'
     ?'Hide status code'
     :'Show status code';
    let infoDiv = button.closest('.info');
    let statusDiv = infoDiv.querySelector('.status');
    if(statusDiv.classList.contains('hidden')){
        statusDiv.classList.remove('hidden')
    }else{
        statusDiv.classList.add('hidden')

    }
}