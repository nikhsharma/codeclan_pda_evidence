var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add', function(){
    calculator.previousTotal = 2;
    calculator.add(2);
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 4;
    calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, 2);
  })

});
