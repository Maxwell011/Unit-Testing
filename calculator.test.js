const Calculator = require('./calculator');

describe('calculator', () => {
  test('addition', () => {
    const calc = new Calculator();
    const add = calc.add(3, 4);
    expect(add).toBe(7);
  });
  test('subtraction', () => {
    const calc = new Calculator();
    const subtract = calc.subtract(6, 4);
    expect(subtract).toBe(2);
  });
  test('multiplication', () => {
    const calc = new Calculator();
    const multiply = calc.multiply(6, 4);
    expect(multiply).toBe(24);
  });
  test('division', () => {
    const calc = new Calculator();
    const divide = calc.divide(6, 2);
    expect(divide).toBe(3);
  });
});
