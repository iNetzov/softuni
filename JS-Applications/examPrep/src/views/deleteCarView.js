import * as carService from '../services/carService.js'


export const renderDeleteCar = (ctx) =>{
    console.log(ctx);
const carId = ctx.params.carId;
carService.getOne(carId)
.then(car=>{
    if(car.ownerId !=ctx.user_id){
        ctx.page.redirect('/listing')
        throw 'car Owndership failed!'
    }
    if(confirm('Are you sure you want to delete')){
        return carService.del(carId);
    }else {
        //throw 'abort deletion'
    }
}).then(()=>ctx.page.redirect('/listing'));
}