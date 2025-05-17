const pizzUni = require('../pizzaPlace');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('testing', () => {
    describe('testing makeAnOrder', () => {

        it('should return confirmation message when pizza is ordered', () => {
            let obj = { orderedPizza: 'peperoni' };
            let result = 'You just ordered peperoni'
            assert.equal(pizzUni.makeAnOrder(obj), result);
        });

        it('should return confirmation message when pizza and drink is ordered', () => {
            let obj = { orderedPizza: 'peperoni', orderedDrink: 'Coke' };
            let result = 'You just ordered peperoni and Coke.'
            assert.equal(pizzUni.makeAnOrder(obj), result);
        });

        it('should throw when there is no ordered pizza', () => {
            let obj = {};
            expect(() => pizzUni.makeAnOrder(obj).to.throw());
        });

        it('when there is only drink', () => {
            let obj = { orderedDrink: 'Pepsi' };
            expect(() => pizzUni.makeAnOrder(obj).to.throw());
        });

        it('should throw when there is null', () => {
            expect(() => pizzUni.makeAnOrder().to.throw());
        });
        //null
        it('should throw when there is no order', () => {
            expect(() => pizzUni.makeAnOrder(null).to.throw());
        });
    });


    describe('testing getRemainingWork', () => {

        it('should return  all orders completed when one ready status is given', () => {
            let statusArr = [{ pizzaName: 'Margarita', status: 'ready' }];
            let result = 'All orders are complete!'
            assert.equal(pizzUni.getRemainingWork(statusArr), result);
        });
        it('should return  all orders completed when more then one  ready status is given', () => {
            let statusArr = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Margaritaaaa', status: 'ready' }];
            let result = 'All orders are complete!'
            assert.equal(pizzUni.getRemainingWork(statusArr), result);
        });
        it('should return  remaning pizzas when one pending order', () => {
            let statusArr = [{ pizzaName: 'Margarita', status: 'preparing' }, { pizzaName: 'Margaritaaaa', status: 'ready' }];
            let result = 'The following pizzas are still preparing: Margarita.'
            assert.equal(pizzUni.getRemainingWork(statusArr), result);
        });
        it('should return  remaning pizzas when more pending order', () => {
            let statusArr = [{ pizzaName: 'Margarita', status: 'preparing' }, { pizzaName: 'Margaritaaaa', status: 'preparing' }];
            let result = 'The following pizzas are still preparing: Margarita, Margaritaaaa.'
            assert.equal(pizzUni.getRemainingWork(statusArr), result);
        });
    });
    describe('testing orderType', () => {
        
        it('should return  total sum when type of ordder is deliveed', () => {
            let totalSum = 10;
            let orderType = 'Delivery'
            assert.equal(pizzUni.orderType(totalSum,orderType),totalSum);
        });
        it('should return  total sum with discout when type of ordder is carry out', () => {
            let totalSum = 10;
            let orderType = 'Carry Out'
            assert.equal(pizzUni.orderType(totalSum,orderType),9);
        });
        it('should return  totalSum with discout using floting point number', () => {
            let totalSum = 10.50;
            let orderType = 'Carry Out'
            assert.equal(pizzUni.orderType(totalSum,orderType),9.45);
        });

    })

})