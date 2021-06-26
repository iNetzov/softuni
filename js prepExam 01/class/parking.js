class Parking {

    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }
        let car = {
            carModel,
            carNumber,
            payed: false,
        };
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber){
        let currentCar = this.vehicles.find(x=>x.carNumber == carNumber)
        if(!currentCar){
            throw new Error(`The car you're loking for, is not found.`)
        }else if(!currentCar.payed){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
    }else {
        this.vehicles = this.vehicles.filter(x=>x.carNumber !=carNumber);
        return `${carNumber} left the parking lot.`
    }
}
    pay(carNumber){
        let currentCar = this.vehicles.find(x=>x.carNumber ==carNumber);
        if(!currentCar){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }else if (currentCar.payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }else{
            currentCar.payed = true;
            return`${carNumber}'s driver successfully payed for his stay.`;
        }

    }
    getStatistics(carNumber){
        let currentCar = this.vehicles.find(x=>x.carNumber ==carNumber);
        if(currentCar.payed){
            return`${carModel} == ${carNumber} - Has payed`
        }else {
            return`${carModel} == ${carNumber} - Not payed`
        }


    }
    getStatistics(){
        let empty  = this.capacity - this.vehicles.length;
        let result  = `The Parking Lot has ${empty} empty spots left.`;
        console.log(this.vehicles);
        let sortedArray = this.vehicles.sort((a,b)=>{a.carModel.localeCompare(b.carModel)})
        console.log(sortedArray);

        for (const car of this.vehicles) {
            let payedStr = '';
            if(car.payed){
            payedStr = 'Has payed'
            }else{
                payedStr = 'Not payed'
            }
            let str =`\n${car.carModel} == ${car.carNumber} - ${payedStr}`;
            result+=str;
        }
        return result;
    }
}


const parking = new Parking(12);

console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.addCar('Audi ', 'TX3691C'));
console.log(parking.addCar('Bmv t600', 'TX369'));
console.log(parking.getStatistics());

console.log(parking.pay('TX3691CA'));
console.log(parking.removeCar('TX3691CA'));