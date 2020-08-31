export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [101, 'Товар отсутствует'],
      [102, 'Товар уже есть в корзине'],
      [160, 'Доставка в этот регион невозможна'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
