// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  //   PREP
  //   Parameters
  //   - A string, may contain numbers and special characters
  //   Return
  //   - Return a string with each letter replaced by the letter 13 letters after it
  //   - Any non-letters should be returned as is
  //   Examples
  //   - test -> grfg

  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  )
}
