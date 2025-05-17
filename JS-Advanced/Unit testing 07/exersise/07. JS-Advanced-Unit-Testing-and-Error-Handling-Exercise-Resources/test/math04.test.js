const mathEnforcer = require('../math04');
const assert = require('chai').assert;

describe('testing MathEnfircer',()=>{

    describe('testing addFive',()=>{

        it('tests if you good params',()=>{
            assert.equal(mathEnforcer.addFive(5),10);
        });
        it('tests if string params throw undifine',()=>{
            assert.equal(mathEnforcer.addFive('5'),undefined);
        });
        it('tests with negative params',()=>{
            assert.equal(mathEnforcer.addFive(-5),0);
        });
        it('tests with double params',()=>{
            assert.equal(mathEnforcer.addFive(1.5),6.5);
        });
    })
    describe('testing subtracked 10',()=>{

        it('tests with good value',()=>{
            assert.equal(mathEnforcer.subtractTen(10),0);
        });
        it('tests with bad params Str',()=>{
            assert.equal(mathEnforcer.subtractTen('10'),undefined);
        });
        it('testing with negative numbers',()=>{
            assert.equal(mathEnforcer.subtractTen(-10),-20);
        });
        it('testing with 0 numbers',()=>{
            assert.equal(mathEnforcer.subtractTen(0),-10);
        });
        it('testing with doube numbers',()=>{
            assert.equal(mathEnforcer.subtractTen(10.5),0.5);
        });

    })

    describe('testing sum',()=>{

        it('testing sum with paramater A not number',()=>{
            assert.equal(mathEnforcer.sum('1',2),undefined);
        });
        it('testing sum with paramater B not number',()=>{
            assert.equal(mathEnforcer.sum(1,'2'),undefined);
        });
        it('testing sum with good paramater ',()=>{
            assert.equal(mathEnforcer.sum(1,2),3);
        });
        it('testing sum with negative paramater A not number',()=>{
            assert.equal(mathEnforcer.sum(-1,2),1);
        });
        it('testing sum with negative paramater B not number',()=>{
            assert.equal(mathEnforcer.sum(10,-2),8);
        });
        it('testing sum with 0 paramater A',()=>{
            assert.equal(mathEnforcer.sum(0,2),2);
        });
        it('testing sum with 0 paramater B',()=>{
            assert.equal(mathEnforcer.sum(2,0),2);
        });
        it('testing sum with negative paramater B',()=>{
            assert.equal(mathEnforcer.sum(10,-5),5);
        });
        it('testing sum with double paramater A',()=>{
            assert.equal(mathEnforcer.sum(10.5,-5),5.5);
        });
        it('testing sum with double paramater B',()=>{
            assert.equal(mathEnforcer.sum(10.5,-5.5),5);
        });
    })

})