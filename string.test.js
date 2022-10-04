const { stringLength, capitalize } = require('./String');

test('string.length > 0 && string.length <= 10', () => {
  expect(stringLength('string')).toBe(6);
});

test('string first letter capitalize', () => {
  expect(capitalize('string')).toBe('String');
});
