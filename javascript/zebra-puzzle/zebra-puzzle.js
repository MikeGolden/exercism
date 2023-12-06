export class ZebraPuzzle {
  constructor() {
    this.houses = [
      { nationality: "Englishman" },
      { nationality: "Spaniard" },
      { nationality: "Ukrainian" },
      { nationality: "Norwegian" },
      { nationality: "Japanese" },
    ];

    this.colors = ["red", "green", "ivory", "yellow", "blue"];
    this.pets = ["dog", "snails", "fox", "horse", "zebra"];
    this.drinks = ["coffee", "tea", "milk", "orange juice", "water"];
    this.cigarettes = [
      "Old Gold",
      "Kools",
      "Chesterfields",
      "Lucky Strike",
      "Parliaments",
    ];

    this.positions = [0, 1, 2, 3, 4];
    this.middleHouse = 2;

    this.solve();
  }

  waterDrinker() {}

  zebraOwner() {}
}
