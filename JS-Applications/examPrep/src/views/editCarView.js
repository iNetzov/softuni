import { html } from "../../node_modules/lit-html/lit-html.js";
import * as carService from '../services/carService.js';
import { checkCarForm } from "./helpers.js";

const editCarTemplate = (car,onSubmit) => html`
<!-- Edit Listing Page -->
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`

export const renderEditCar = (ctx) => {
    let carId = ctx.params.carId;
    const onSubmit = (e) =>{
        e.preventDefault();
        let car = Object.fromEntries(new FormData(e.currentTarget));

        if(checkCarForm(car)){
            alert('you must filled all the fields')
            return;
        }
        car.year = Number(car.year);
        car.price = Number(car.price);


        carService.update(carId,car).then(()=>ctx.page.redirect(`/listing/${carId}`))
    } 

    carService.getOne(carId)
        .then(car =>{
            if(car._ownerId != ctx.user._id){
                ctx.page.redirect(`/listing/`)
                return
            }
            ctx.render(editCarTemplate(car,onSubmit));
        })
}