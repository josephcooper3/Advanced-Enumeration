const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const anagrams = [];
  const word = this.word.toLowerCase();
  const sortedWord = word.split('').sort();
  otherWords.forEach ( otherWord => {
    const lowerCaseOtherWord = otherWord.toLowerCase();
    const sortedOtherWord = lowerCaseOtherWord.split('').sort();
    if (sortedOtherWord.join() === sortedWord.join() && otherWord != word) {
      anagrams.push(otherWord);
    }
  })
  return anagrams;
}

module.exports = AnagramFinder;
