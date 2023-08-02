// The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=81+92

// The next number in having this property is 135135135:

// See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
// Task

// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []


// My Solution
function sumDigPow(a, b) {
    let arr = []
    
    for (let i = a; i <= b; i++){
      if (i.toString()
           .split('')
           .reduce((acc, cur, index) => 
           acc + Math.pow(+cur, index + 1), 0) === i){arr.push(i)}
    }
    
    return arr
  }
  
  // PREP
  // Parameters
  // - Two integers: a, b that defines the range (inclusive)
  
  // Return
  // - A list of sorted numbers in the range described by the parameters
  // - If there are no numbers in the range, it should output an empty array
  
  // Examples
  // 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
  
  // Pseudocode
  // Create an empty array to store the return value
  // Create a loop beginning at a and ending at b
  // For each input, determine if the input is equal to the sum of its digits to the power of consecutive powers starting from 1
  // If so, add it to the return array