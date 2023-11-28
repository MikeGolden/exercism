export const abilityModifier = (constitution) => {
  const modifier = Math.floor((constitution - 10) / 2);
  if (constitution < 3) {
    throw new Error("Ability scores must be at least 3");
  } else if (constitution > 18) {
    throw new Error("Ability scores can be at most 18");
  }
  return modifier;
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
  }

  static rollAbility() {
    let rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.ceil(Math.random() * 6));
    }
    rolls.sort().unshift();
    let result = rolls.reduce((sum, item) => (sum += item), 0);
    return result < 3 || result > 18 ? Character.rollAbility() : result;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}

