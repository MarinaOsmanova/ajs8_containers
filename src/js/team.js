export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Этот персонаж уже есть в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (let i = 0; i < characters.length; i += 1) {
      const character = characters[i];
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    }
  }

  toArray() {
    return [...this.members];
  }
}
