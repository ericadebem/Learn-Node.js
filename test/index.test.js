const pegaArquivo = require('../index')

TextDecoderStream('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});