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

  it('should be able to multiply', function() {
    calculator.previousTotal = 5;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 25);
  })

  it('should be able to divide', function() {
    calculator.previousTotal = 25;
    calculator.divide(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to click on a number', function() {
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('should be able to click on an operator', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+')
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 2);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 4);
  })

});
