const cinema = require('../cinema');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('testing',()=>{

    describe('testing showMovies',()=>{

        it('should return There are currently no movies to show. for 0 movies to show',()=>{
            let obj = [];
            let result = 'There are currently no movies to show.';
            assert.equal(cinema.showMovies(obj), result);
        });  




    






        it('should return  for 2 movie to show',()=>{
            let obj = ['anabel','groot'];
            let result = 'anabel, groot';
            assert.equal(cinema.showMovies(obj), result);
        })
        it('should return  for 1 movie to show',()=>{
            let obj = ['anabel'];
            let result = 'anabel';
            assert.equal(cinema.showMovies(obj), result);
        })
        it('should return throw with no movies',()=>{
            let obj = [];
            let result ='' ;
            expect(() => cinema.showMovies().to.throw());
        })
        it('should return throw with undefined',()=>{
            let obj = [];
            let result ='' ;
            expect(() => cinema.showMovies(undefined).to.throw());
        })
        it('should return throw with null',()=>{
            let obj = [];
            let result ='' ;
            expect(() => cinema.showMovies(null).to.throw());
        })
        it('should return throw with null',()=>{
            let obj = [4];
            let result ='' ;
            expect(() => cinema.showMovies(obj).to.throw());
        })
        it('should return throw with null',()=>{
            let obj = [null];
            let result ='' ;
            expect(() => cinema.showMovies(obj).to.throw());
        })

    });
    describe('testing ticketPrice with premiere',()=>{

        it('checking if premire exists',()=>{
            let str = 'Premiere';
            let result = 12.00;
            assert.equal(cinema.ticketPrice(str), result);
        })
        it('checking if normal exists',()=>{
            let str = 'Normal';
            let result = 7.50;
            assert.equal(cinema.ticketPrice(str), result);
        })
        it('checking if discount exists',()=>{
            let str = 'Discount';
            let result = 5.50;
            assert.equal(cinema.ticketPrice(str), result);
        })
        it('checking if it will troll with wrong str',()=>{
            let str = 'Discounttt';
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice(str).to.throw());
        })
        it('checking if it will troll with null',()=>{
            let str = null;
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice(str).to.throw());
        })
        it('checking if it will troll with undefined',()=>{
            let str = undefined;
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice(str).to.throw());
        })
        it('checking if it will troll with empty srt',()=>{
            let str = '';
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice(str).to.throw());
        })
        it('checking if it will troll with no param',()=>{
            let str = '';
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice().to.throw());
        })
        it('checking if it will troll with  param boolean',()=>{
            let str = true;
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice().to.throw());
        })
        it('checking if it will troll with  param int',()=>{
            let str = 9; 
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice().to.throw());
        })
        it('checking if it will troll with  param floating',()=>{
            let str = 9.5;
            let result = 'Invalid projection type.';
            expect(() => cinema.ticketPrice().to.throw());
        })
    });
    describe('testing swapSeatsInHall',()=>{

        it('testing if it swaps correct',()=>{
            let seatOne = 5;
            let seatTwo = 10;
            let result  = 'Successful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with A negative',()=>{
            let seatOne = -5;
            let seatTwo = 10;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with B negative',()=>{
            let seatOne = 5;
            let seatTwo = -10;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with AB negative',()=>{
            let seatOne = -5;
            let seatTwo = -10;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with AB positive',()=>{
            let seatOne = 25;
            let seatTwo = 210;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with AB lines positive',()=>{
            let seatOne = 0;
            let seatTwo = 20;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with B bigger positive',()=>{
            let seatOne = 10;
            let seatTwo = 21;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with A bigger positive',()=>{
            let seatOne = 21;
            let seatTwo = 10;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with b floating positive',()=>{
            let seatOne = 10;
            let seatTwo = 11.3;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with A floating positive',()=>{
            let seatOne = 10.5;
            let seatTwo = 11;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with A string positive',()=>{
            let seatOne = '10';
            let seatTwo = 11;
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect with B string positive',()=>{
            let seatOne = 10;
            let seatTwo = '11';
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect a only',()=>{
            let seatOne = 10;
            let seatTwo = 11
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne), result);
        })
        it('testing if it swaps incorect b only',()=>{
            let seatOne = 10;
            let seatTwo = 11
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatTwo), result);
        })
        it('testing if it swaps incorect b null',()=>{
            let seatOne = 10;
            let seatTwo = null
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect b undefined',()=>{
            let seatOne = 10;
            let seatTwo = undefined
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect a undefined',()=>{
            let seatOne = undefined;
            let seatTwo = 10
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect a null',()=>{
            let seatOne = null;
            let seatTwo = 10
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect a null',()=>{
            let seatOne = 1;
            let seatTwo = 20
            let result  = 'Successful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
         it('testing if it swaps incorect a null',()=>{
            let seatOne = 20;
            let seatTwo = 1
            let result  = 'Successful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
        it('testing if it swaps incorect a null',()=>{
            let seatOne = null;
            let seatTwo = 10
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(), result);
        })
        it('testing if it swaps incorect a null',()=>{
            let seatOne = 10;
            let seatTwo = 10
            let result  = 'Unsuccessful change of seats in the hall.'
            assert.equal(cinema.swapSeatsInHall(seatOne,seatTwo), result);
        })
    })
    

})