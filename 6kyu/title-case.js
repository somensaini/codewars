// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
function titleCase(title, minorWords) {
  //   PREP
  //   Parameters
  //   - A string to convert to title case
  //   - An optional list of exceptions, a string with each word separated by a space
  //   Return
  //   - A title cased string, ignoring any minor words
  //   Examples
  //      titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
  //      titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
  //      titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
  //   Pseudocode
  //   - Split the string into an array of words
  //   - For every word except the first word,
  //     if the word is not in the list of minor words,
  //     take the first letter of the word and capitalize it, and return the rest as lowercase
  //   - Join the array together and return the string
  minorWords =
    typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(" ") : []
  return title
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (word != "" && (minorWords.indexOf(word) === -1 || index == 0)) {
        word = word.split("")
        word[0] = word[0].toUpperCase()
        word = word.join("")
      }
      return word
    })
    .join(" ")
}
