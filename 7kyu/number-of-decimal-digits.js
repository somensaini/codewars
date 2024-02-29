// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
  //   PREP
  //   Parameters
  //   - An integer, >= 0
  //   Return
  //   - The number of digits in the integer
  //   Examples
  //     [0, 1],
  //     [9, 1],
  //     [66, 2],
  //     [12345, 5],
  //     [128685, 6],
  //     [9876543210, 10],
  //     [9007199254740991, 16],
  //   Pseudocode
  //   - Return the length of the integer after converting it to a string
  return String(n).length
}
