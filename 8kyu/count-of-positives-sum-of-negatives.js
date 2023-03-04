// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My Solution
function countPositivesSumNegatives(input) {
    if (input == null || input == []){
      return []
    }
    
    let posCount = 0
    let negSum = 0
    
    input.forEach(element => (element > 0 ? posCount++ : negSum += element))
    
    if (posCount == 0 && negSum == 0){return []}
    let arr = [posCount, negSum]
    
    return arr
  }