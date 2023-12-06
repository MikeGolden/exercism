export class ZebraPuzzle {
  constructor() {
    this.houses = [
      {
        color: 'red',
        position: '3',
        nationality: 'Englishman',
        beverages: 'Milk',
        pet: 'Snail',
        smoke: 'Old Gold'
      },
      {
        color: 'green',
        position: '5', 
        nationality: 'Japanese', 
        beverages: 'Coffee',
        pet: 'Zebra', 
        smoke: 'Parliaments'
      },
      {
        color: 'ivory',
        position: '4', 
        nationality: 'Spaniard', 
        beverages: 'Orange Juice', 
        pet: 'Dog', 
        smoke: 'Lucky Strike' 
      },
      {
        color: 'yellow',
        position: '1',
        nationality: 'Norwegian',
        beverages: 'Water',
        pet: 'Fox',
        smoke: 'Kools'
      },
      {
        color: 'blue',
        position: '2',
        nationality: 'Ukrainian',
        beverages: 'Tea',
        pet: 'Horse',
        smoke: 'Chesterfields'
      },
    ]
  }

  informationSearched(information){
    let answer;
    for (let i = 0; i < this.houses.length; i++) {
      const house = this.houses[i];
      
      for (const key in house) {
        const value = house[key];
        if (value === information) {
          return house['nationality'];
        }
      }
    }
  }

  waterDrinker() {
    return this.informationSearched('Water');
  }

  zebraOwner() {
    return this.informationSearched('Zebra');
  }
}