// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.

// My Solution

function validBraces(braces){
//   PREP
//   PARAMETERS
//   Accepts a string of braces - nonempty and will only consist of parentheses, brackets, and curly braces () [] {}
  
//   RETURN
//   If the order of the braces is valid, return true, otherwise false.
//   Considered valid if all braces are matched with the correct brace
  
//   EXAMPLES
//   "(){}[]"   =>  True
//   "([{}])"   =>  True
//   "(}"       =>  False
//   "[(])"     =>  False
//   "[({})](]" =>  False
  
//   PSEUDOCODE
//   Create a matches object that assigns each opening brace to the closing brace
//   Create an empty stack array and a variable to hold the current brace for the loop
//   Loop through the string, set the current brace to the variable
//   If the brace exists in the matches object, push it to the empty array
//   If it does not, check if the current brace is a closing brace in the matches object
//   If it is not, return false
//   Return true if the array length is equal to 0 ???
  
  let matches = {'(' : ')', 
                 '[' : ']',
                 '{' : '}'}
  let stack = []
  let current
  
  for (let i = 0; i < braces.length; i++){
    current = braces[i]
    if (matches[current]){
      stack.push(current)
    }else if (current !== matches[stack.pop()]){
      return false
    }
  }
  
  return (stack.length === 0)
}