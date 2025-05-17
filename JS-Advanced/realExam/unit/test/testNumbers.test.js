const testNumbers = require('../testNumbers');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('testing sumNumbers',()=>{
    it('testing with 2 string params',()=>{
        let expected = undefined;
        let actual  = testNumbers.sumNumbers('1','2');
        assert.equal(actual,expected); 
    });
    it('testing with 2digit double string params',()=>{
        let expected = 3.32;
        let actual  = testNumbers.sumNumbers(1.321, 2);
        assert.equal(actual,expected); 
    });
    it('testing with A string params',()=>{
        let expected = undefined;
        let actual  = testNumbers.sumNumbers('1',2);
        assert.equal(actual,expected); 
    });
    it('testing with B string params',()=>{
        let expected = undefined;
        let actual  = testNumbers.sumNumbers(1,'2');
        assert.equal(actual,expected); 
    });
    
    it('testing with no params',()=>{
        let expected = undefined;
        let actual  = testNumbers.sumNumbers();
        assert.equal(actual,expected); 
    }); 
    it('testing with good  params',()=>{
        let expected = 3;
        let actual  = testNumbers.sumNumbers(1,2);
        assert.equal(actual,expected); 
    })
    it('testing with A negative params',()=>{
        let expected = 4;
        let actual  = testNumbers.sumNumbers(-1,5);
        assert.equal(actual,expected); 
    });
    it('testing with B negative params',()=>{
        let expected = 4;
        let actual  = testNumbers.sumNumbers(5,-1);
        assert.equal(actual,expected); 
    });
    it('testing with A B  negative params',()=>{
        let expected = -6;
        let actual  = testNumbers.sumNumbers(-1,-5);
        assert.equal(actual,expected); 
    });
    it('testing with 0  params',()=>{
        let expected = 0;
        let actual  = testNumbers.sumNumbers(0,0);
        assert.equal(actual,expected); 
    });
    it('testing with A double   params',()=>{
        let expected = 6.1;
        let actual  = testNumbers.sumNumbers(1.1,5);
        assert.equal(actual,expected); 
    });
    it('testing with  B double params',()=>{
        let expected = 6.1;
        let actual  = testNumbers.sumNumbers(1,5.1);
        assert.equal(actual,expected); 
    });

    describe('testing numberChecker',()=>{
        it('throw error with string params ',()=>{
            expect(()=>testNumbers.numberChecker('14').to.throw());
        });
        it('throw error with no params ',()=>{
            expect(()=>testNumbers.numberChecker().to.throw());
        });
        it('check if odd number',()=>{
            let actual = testNumbers.numberChecker(5);
            let expected =`The number is odd!`
            assert.equal(actual,expected);
        });
        it('check if even number',()=>{
            let actual = testNumbers.numberChecker(6);
            let expected =`The number is even!`
            assert.equal(actual,expected);
        });
        it('check if  0 even number',()=>{
            let actual = testNumbers.numberChecker(0);
            let expected =`The number is even!`
            assert.equal(actual,expected);
        });
        it('check if negative odd number',()=>{
            let actual = testNumbers.numberChecker(-5);
            let expected =`The number is odd!`
            assert.equal(actual,expected);
        });
        it('check if negative even number',()=>{
            let actual = testNumbers.numberChecker(-6);
            let expected =`The number is even!`
            assert.equal(actual,expected);
        });
        it('check if double odd number',()=>{
            let actual = testNumbers.numberChecker(7.5);
            let expected =`The number is odd!`
            assert.equal(actual,expected);
        });
        it('check if double even number',()=>{
            let actual = testNumbers.numberChecker(6.0);
            let expected =`The number is even!`
            assert.equal(actual,expected);
        });
        
    })
    describe('testing averageSumArray',()=>{
        it('testing with good params',()=>{
          let actual = testNumbers.averageSumArray([1,2,3])
            let expected = 2
            assert.equal(actual,expected);
        });
        it('testing with double params',()=>{
            let actual = testNumbers.averageSumArray([1.1,2.2,3])
              let expected = 2.1
              assert.equal(actual,expected);
          });
          it('testing with 0 params',()=>{
            let actual = testNumbers.averageSumArray([0,0,0])
              let expected = 0
              assert.equal(actual,expected);
          });
    })
})