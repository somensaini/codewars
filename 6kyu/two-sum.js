// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// My Solution

function twoSum(numbers, target) {
//   PREP
//   PARAMETERS
//   An array of numbers - Numbers will be an array of length >= 2, all numbers
//   A target number - Will always be the sum of two different items from that array
  
//   RETURN
//   Two different numbers in the array, that when added together, give the target number.
//   Return index of the two numbers as an array.
  
//   EXAMPLES
//   twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//     [[1,2,3],          4,     [0,2]],
//     [[1234,5678,9012], 14690, [1,2]],
//     [[2,2,3],          4,     [0,1]],
//     [[2,3,1],          4,     [1,2]]

//   PSEUDOCODE
//   Double loop through the array and add each number to determine if it is equal to the target number
  
  for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target){
        return [i, j]
      }
    }
  }
}