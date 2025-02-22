import {render} from '../node_modules/lit-html/lit-html.js'
import {allTownTemplate}from '../01.List-Towns/townTemplate.js'

let form = document.querySelector('#town-form')
form.addEventListener('submit',displayTowns);



function displayTowns(e){
e.preventDefault();
let form = e.target;
let formData = new FormData(form);
let townsString = formData.get('towns');
let towns = townsString.split(', ');
let rootDiv = document.querySelector('#root')
render(allTownTemplate(towns),rootDiv)
}