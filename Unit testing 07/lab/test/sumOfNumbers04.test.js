
const sum = require('../sumOfNumbers04');
const assert = require('chai').assert;


describe('test1',()=>{
    it('should add possitive Numbers',()=>{
        let input = [1,2,3];
        let expectedResult = 6;
        let actualResult = sum(input);
        assert.strictEqual(actualResult,expectedResult);
    });
    
    it('should not add possitive Numbers',()=>{
        let input = [1,2,3];
        let expectedResult = 16;
        let actualResult = sum(input);
        assert.notEqual(actualResult,expectedResult);
    });

    it('should add negative Numbers',()=>{
        let input = [-1,-2,-3];
        let expectedResult = -6;
        let actualResult = sum(input);
        assert.strictEqual(actualResult,expectedResult);
    });
})

