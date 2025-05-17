const sum = require('../checkforSymmetry05');
const assert = require('chai').assert;

describe('testing input',()=>{

    it('test if array can be entered',()=>{
        let input = [1,2,3,2,1];
        let expectedResult = true;
        let actualResult = sum(input);
        assert.equal(actualResult,expectedResult);
    
    });

    it('it should fail when non simetric array',()=>{
        let input = [1,2,3,2,5];
        let expectedResult = false;
        let actualResult = sum(input);
        assert.equal(actualResult,expectedResult);
    
    });

    it('should fail if not array provided ',()=>{
        let expectedResult = false;
        assert.equal(sum(null),expectedResult);
    });
    it('test str1 and 1 ',()=>{
        let expectedResult = false;
        assert.equal(sum(['1',1]),expectedResult);
    });
    it('test 1 and 1 ',()=>{
        let expectedResult = true;
        assert.equal(sum([1,1]),expectedResult);
    });

})