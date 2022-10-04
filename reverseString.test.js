const reverseString = require('./reverseString');

test('return reverse of a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
