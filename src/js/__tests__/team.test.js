import Team from '../team';

class Character {
  constructor(name) { this.name = name; }
}

test('characters must be added to the team', () => {
  const team = new Team();
  const character1 = new Character('warrior1');
  const character2 = new Character('warrior2');
  team.add(character1);
  team.add(character2);
  const expected = [character1, character2];
  expect(team.toArray()).toEqual(expected);
});

test('when adding a character duplicate, an exception must be thrown', () => {
  expect(() => {
    const team = new Team();
    const character = new Character('warrior1');
    team.add(character);
    team.add(character);
  }).toThrow('Этот персонаж уже есть в команде');
});

test('can add several characters at once', () => {
  const team = new Team();
  const character1 = new Character('warrior1');
  const character2 = new Character('warrior2');
  const character3 = new Character('warrior3');

  team.addAll(character1, character2, character1, character3, character2);
  const expected = [character1, character2, character3];
  expect(team.toArray()).toEqual(expected);
});
