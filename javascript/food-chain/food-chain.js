export class Song {
  verse(num) {
    const verses = [
      "I know an old lady who swallowed a fly.",
      "I don't know why she swallowed the fly. Perhaps she'll die.",
      "I know an old lady who swallowed a spider.",
      "It wriggled and jiggled and tickled inside her.",
      "She swallowed the spider to catch the fly.",
      "I don't know why she swallowed the fly. Perhaps she'll die.",
      "I know an old lady who swallowed a bird.",
      "How absurd to swallow a bird!",
      "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
      "She swallowed the spider to catch the fly.",
      "I don't know why she swallowed the fly. Perhaps she'll die.",
      "I know an old lady who swallowed a cat.",
      "Imagine that, to swallow a cat!",
      "She swallowed the cat to catch the bird.",
    ];

    return verses[num - 1];
  }

  verses(startVerse, endVerse) {
    let song = "";
    for (let i = startVerse; i <= endVerse; i++) {
      song += this.verse(i);
      if (i !== endVerse) {
        song += "\n";
      }
    }
    return song;
  }
}
