import ErrorRepository from '../error_repository';

test('getting a description of a known errors', () => {
  const errRep = new ErrorRepository();
  expect(errRep.translate(101)).toBe('Товар отсутствует');
  expect(errRep.translate(102)).toBe('Товар уже есть в корзине');
  expect(errRep.translate(160)).toBe('Доставка в этот регион невозможна');
});

test('getting a description of a unknown errors', () => {
  const errRep = new ErrorRepository();
  expect(errRep.translate(1001)).toBe('Unknown error');
});
