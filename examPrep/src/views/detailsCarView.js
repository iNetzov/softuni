import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';


const detailsCarTemplate = (car) => html`
<!-- Listing Details Page -->
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
            <a href="/listing/${car._id}/edit" class="button-list">Edit</a>
            <a href="/listing/${car._id}/delete" class="button-list">Delete</a>
        </div>
    </div>
</section>
`;

export const renderCarDetails= (ctx) => {

    carService.getOne(ctx.params.carId).then(car=>{
        ctx.render(detailsCarTemplate(car));
    });
}