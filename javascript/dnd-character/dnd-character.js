export const abilityModifier = (constitution) => {
  return Math.floor((constitution - 10) / 2); // Calculate and return the ability modifier for constitution
};

export class Character {
  static rollAbility() {
    const rolls = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1,
    ); // Generate 4 random dice rolls
    rolls.sort((a, b) => b - a); // Sort the rolls in descending order
    return rolls.slice(0, 3).reduce((acc, curr) => acc + curr, 0); // Return the sum of the three highest rolls
  }

  // Getters for each ability using rollAbility() method
  get strength() {
    return Character.rollAbility();
  }

  get dexterity() {
    return Character.rollAbility();
  }

  get constitution() {
    return Character.rollAbility();
  }

  get intelligence() {
    return Character.rollAbility();
  }

  get wisdom() {
    return Character.rollAbility();
  }

  get charisma() {
    return Character.rollAbility();
  }

  // Getter for hitpoints based on constitution modifier
  get hitpoints() {
    const conModifier = abilityModifier(this.constitution); // Get constitution modifier
    return 10 + conModifier;
  }
}
