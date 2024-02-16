// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  //   PREP
  //   Parameters
  //   - A string, can be empty

  //   Return
  //   - A string, starting with "#", first letter of each word capitalized and joined together

  //   Examples
  //   " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  //   "    Hello     World   "                  =>  "#HelloWorld"
  //   ""                                        =>  false

  //   Pseudocode
  //   - Check if the initial string is empty, return false if so
  //   - Split the string using spaces, capitalize the first letter of each item, join together and add a hashtag
  //   - If the result is longer than 140 chars, return false
  //   - Return the string

  if (!str.trim()) return false

  const result =
    "#" +
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")

  return result.length > 140 ? false : result
}
