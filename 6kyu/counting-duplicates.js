// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// My Solution
function duplicateCount(text){
  // Change text to lowercase to account for case-insensitive characters.
  // Create a cache object to store the amount of times each character appears
  // Create a counter variable for the return statement
  text = text.toLowerCase()
  let cache = {}
  let counter = 0
  
  // Loop through each character in the string
  // If the value of text[i] exists, increase by one. Otherwise, set it to 0 and increase by 1.
  for (let i in text){
    cache[text[i]] = ( cache[text[i]] || 0 ) + 1
  }
  
  // Loop through character in the cache
  // If that character has a value of greater than 1, increase counter by 1
  for (let i in cache){
    if (cache[i] > 1){
      counter++
    }
  }
  
  // Return counter
  return counter
}