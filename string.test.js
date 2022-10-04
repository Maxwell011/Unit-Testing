const stringLength = require('./String');

test('string.length > 0 && string.length <= 10', () => {
  expect(stringLength('string')).toBe(6);
});
