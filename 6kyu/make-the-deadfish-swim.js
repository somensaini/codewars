// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

function parse(data) {
  //   PREP
  //   Parameters
  //   - A string containing 4 commands:
  //     i increments the value (initially 0)
  //     d decrements the value
  //     s squares the value
  //     o outputs the value into the return array
  //   Return
  //   - An output array
  //   Examples
  //   - parse("iiisdoso") => [ 8, 64 ]
  //   Pseudocode
  //   - Create an empty array
  //   - Loop through the letters in the given string, ignore all non-op characters
  //   - For each letter, perform the appropriate action
  //   - Return the final array
  let arr = []
  let num = 0

  for (let c of data) {
    switch (c) {
      case "i":
        num++
        break
      case "d":
        num--
        break
      case "s":
        num = num * num
        break
      case "o":
        arr.push(num)
        break
    }
  }
  return arr
}
