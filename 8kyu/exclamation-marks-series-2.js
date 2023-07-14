// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// My Solution
function remove(string){  
    string = string.split('')
    while (string[string.length - 1] == '!'){
      string.pop()
    }
    return string.join('')
  }