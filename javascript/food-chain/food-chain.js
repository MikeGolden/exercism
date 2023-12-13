//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ANIMALS = [
  'fly', 'spider', 'bird', 'cat',
  'dog', 'goat', 'cow', 'horse',
];

const RHYME = {
  spider: "It wriggled and jiggled and tickled inside her.\n",
  bird: "How absurd to swallow a bird!\n",
  cat: "Imagine that, to swallow a cat!\n",
  dog: "What a hog, to swallow a dog!\n",
  goat: "Just opened her throat and swallowed a goat!\n",
  cow: "I don't know how she swallowed a cow!\n",
  horse: "She's dead, of course!",
}

const why = (idx) => {
  if (idx == 0) return "I don't know why she swallowed the fly. Perhaps she'll die.";
  let [That, This] = [ANIMALS[idx - 1], ANIMALS[idx]];
  if (That == 'spider') That += " that wriggled and jiggled and tickled inside her";
  return `She swallowed the ${This} to catch the ${That}.`;
}

const ladder = (animal) => {
  if (animal == 'horse') return '';
  let ret = [];
  let idx = ANIMALS.indexOf(animal);
  for (let i = idx; i >= 0; i--) ret.push(why(i));
  return ret.join("\n");
}

export class Song {
  verse(num) {
    let animal = ANIMALS[num - 1];
    let ret = "I know an old lady who swallowed a ";
    ret += animal + ".\n";
    ret += RHYME[animal] || "";
    ret += ladder(animal) + "\n";
    return ret;
  }

  verses(first, last) {
    let ret = [];
    for (let i = first; i <= last; i++)
      ret.push(this.verse(i));
    return ret.join("\n") + "\n";
  }
}