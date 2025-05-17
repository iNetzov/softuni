import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';
import { carTemplate } from "../templates/carTemplate.js";


const serchTemplate = (onSearchChange,onSearchClick,cars =[]) => html`
<!-- Search Page -->
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year" @change=${onSearchChange}>
        <button class="button-list"  @click=${onSearchClick}>Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

    ${cars.map(carTemplate)}
       ${cars.length == 0 
       ? html `<p class="no-cars"> No results.</p>`
        :''}
        <!-- Display if there are no matches -->
        
    </div>
</section>
`;

export const renderSerch = (ctx) => {
    let currentSearch  = '';
    const onSearchChange = (e) => {
        currentSearch = e.target.value;
        
    }
    const onSearchClick = (e) => {
        let year = Number(currentSearch);
        carService.getByYear(year).then(cars=>{
            ctx.render(serchTemplate(onSearchChange,onSearchClick,cars))
        });
    }

    ctx.render(serchTemplate(onSearchChange,onSearchClick));
}