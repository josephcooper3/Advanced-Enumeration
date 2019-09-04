const IsogramFinder = function (word) {
  this.word = word.toLowerCase()
}

IsogramFinder.prototype.isIsogram = function () {
  const lettersInWord = this.word.split('');
  let tally = 0;
  for (let i = 0; i < lettersInWord.length; i++) {
    letterToTest = lettersInWord[i];
    for (letter of lettersInWord) {
      if (letter === letterToTest) {
        tally += 1;
      }
    }
  }
  let isogramStatus;
  if (tally === this.word.length) {
    isogramStatus = true;
  } else {
    isogramStatus = false;
  }
  return isogramStatus;
}

module.exports = IsogramFinder;
