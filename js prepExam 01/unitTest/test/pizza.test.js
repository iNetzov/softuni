const pizzUni = require('../pizza');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('testing',()=>{
    describe('testing makeAnOrder',()=>{
        it('testing if pizza entered',()=>{
            let obj ={orderedPizza:'peperoni'};
            let result = 'You just ordered peperoni' 
            assert.equal(pizzUni.makeAnOrder(obj),result);
        })
        it('testing if pizza and drink entered',()=>{
            let obj ={orderedPizza:'peperoni', orderedDrink:'fanta'};
            let result = 'You just ordered peperoni and fanta.';
            assert.equal(pizzUni.makeAnOrder(obj),result);
        })
        it('testing if no pizza is send ',()=>{
            let obj ={};
            let result = 'You must order at least 1 Pizza to finish the order.'
          expect(()=>pizzUni.makeAnOrder(obj).to.throw())
        })
        it('testing if undifined is send ',()=>{
            let obj =undefined;
            let result = 'You must order at least 1 Pizza to finish the order.'
          expect(()=>pizzUni.makeAnOrder(obj).to.throw())
        });
        it('testing if only drink  is send ',()=>{
            let obj ={orderedDrink:'fanta'};
            let result = 'You must order at least 1 Pizza to finish the order.'
          expect(()=>pizzUni.makeAnOrder(obj).to.throw())
        })
        it('testing with null',()=>{
            let obj ={orderedDrink:'fanta'};
            let result = 'You must order at least 1 Pizza to finish the order.'
          expect(()=>pizzUni.makeAnOrder().to.throw())
        })
    })

    describe('testing getRemainingWork',()=>{

        it('testing it should return all orders when one ready',()=>{
            let status =  [{pizzaName:'peperoni',status:'ready'},{pizzaName:'margarita',status:'ready'}]
            assert.equal(pizzUni.getRemainingWork(status),'All orders are complete!')
        })
        it('testing it should return all orders when one ready',()=>{
            let status = [{pizzaName:'peperoni',status:'ready'}]
            assert.equal(pizzUni.getRemainingWork(status),'All orders are complete!')
        })
        it('testing it should return one order',()=>{
            let status = [{pizzaName:'peperoni',status:'unready'}]
            assert.equal(pizzUni.getRemainingWork(status),'The following pizzas are still preparing: peperoni.')
        })
        it('testing it should return multi order',()=>{
            let status = [{pizzaName:'peperoni',status:'unready'},{pizzaName:'margarita',status:'unready'}]
            assert.equal(pizzUni.getRemainingWork(status),'The following pizzas are still preparing: peperoni, margarita.')
        })

    })
    describe('testing orderType',()=>{
        it('testing if delivery returns same sum ',()=>{
            assert.equal(pizzUni.orderType(12,'Delivery'),12);
        })
        it('testing if delivery returns ssum negative number',()=>{
            assert.equal(pizzUni.orderType(-12,'Delivery'),-12);
        })
        it('testing if Carry Out returns ssum negative number',()=>{
            let totalSum = 12;
             totalSum -= 12*0.1;
            assert.equal(pizzUni.orderType(12,'Carry Out'),totalSum);
        })
        
    })
})
