// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

function sumOfMinimums(arr) {
  //   PREP
  //   Parameters
  //   - A nested array of size m * n
  //   - Non empty array containing positive values
  //   Return
  //   - The sum of the minimum values in each row
  //   Examples
  //   [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
  //    , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
  //    , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
  //   ]
  //   Would return 26

  //   Pseudocode
  //   - For each nested array, sort the values from smallest to largest.
  //   - Add all of the values at index 0 together
  //   - Return the sum
  return arr
    .map((array) => array.sort((a, b) => a - b))
    .reduce((acc, cur) => cur[0] + acc, 0)
}
