const lookupChar = require('../charLookUp03');
const assert = require('chai').assert;
describe('testing lookUpChar',()=>{
    it('check if not double returns undifined',()=>{
        assert.equal(lookupChar('111',1.1),undefined);
    });
    it('check if not string returns undifined',()=>{
        assert.equal(lookupChar(1,1),undefined);
    });
    it('check if not string returns undifined',()=>{
        assert.equal(lookupChar(1,'1'),undefined);
    });

    it('check if not a number returns undifined',()=>{
        assert.equal(lookupChar('izabela','ivailo'),undefined);
    });

    it('check if with good values returns correct answer',()=>{
        assert.equal(lookupChar('izabela',0),'i');
    });

    it('check if index too big returns incorect',()=>{
        assert.equal(lookupChar('izabela',25),'Incorrect index');
    });

    it('check if index too small returns incorect',()=>{
        assert.equal(lookupChar('izabela',-25),'Incorrect index');
    });
    it('check if index =  length returns incorect',()=>{
        assert.equal(lookupChar('izabela',7),'Incorrect index');
    });
    it('check if with good values returns correct answer',()=>{
        assert.equal(lookupChar('izabela',6),'a');
    });
})

