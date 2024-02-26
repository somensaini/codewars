// In the following 6 digit number:

// 283910

// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890

// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits) {
  //   PREP
  //   Parameters
  //   - A number as a string of digits, as large as 1000 digits
  //   Return
  //   - A five digit integer representing the greatest sequence of five consecutive digits within the parameter
  //   Examples
  //   - 1234567890 = 67890
  //   Pseudocode
  //   - Loop until the length of the input
  //   - Compare each set of 5 digits of numbers to the previous max
  //   - If higher, replace
  //   - Return max at the end of loop
  let max = 0

  for (let i = 0; i < digits.length; i++) {
    let cur = digits.substr(i, 5)
    if (cur.length === 5 && cur > max) {
      max = cur
    }
  }

  return Number(max)
}
