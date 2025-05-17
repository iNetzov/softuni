import { render } from "../node_modules/lit-html/lit-html.js";
import {optionsTemp} from '../04.Fill-Dropdown/templates/optionTemplate.js';
let menuSelect = document.getElementById('menu'); 
loadOptions();
async function loadOptions(){
let optionsResponce = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
let optionsObj = await optionsResponce.json();
let options = Object.values(optionsObj);
render(optionsTemp(options),menuSelect);
}

let addOptionForm = document.querySelector('#form');
addOptionForm.addEventListener('submit',addItem)
async function addItem(e) {
    let formData = new FormData(e.target);
    let newOptions = {
        text:formData.get('text')
    }
    let createResponce  = await fetch ('http://localhost:3030/jsonstore/advanced/dropdown',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newOptions)
    });
    if(createResponce.ok){
        await loadOptions();
    }
}