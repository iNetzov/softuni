const isOddOrEven = require('../evenOrOdd02');
const assert = require('chai').assert;

describe('isOddOrEven',()=>{

    it('test with undifined',()=>{
        assert.equal(undefined,isOddOrEven(undefined));
    });
    it('test with 1Number',()=>{
        assert.equal(undefined,isOddOrEven(1));
    });
    it('should return even with string',()=>{
        assert.equal('even',isOddOrEven('abcd'));
    });
    it('should return odd with string',()=>{
        assert.equal('odd',isOddOrEven('abc'));
    });

    

})