// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values) {
  //   PREP
  //   Parameters
  //   - An array of integers, all positive

  //   Return
  //   - The smallest number that could be formed from the digits, using the digits only once

  //   Example
  //   minValue ({1, 3, 1})  ==> return (13)
  //   minValue({5, 7, 5, 9, 7})  ==> return (579)
  //   minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

  //   Pseudocode
  //   - Filter array to unique numbers only, sort, join

  return Number(
    values
      .filter((number, index) => values.indexOf(number) === index)
      .sort((a, b) => a - b)
      .join("")
  )
}
