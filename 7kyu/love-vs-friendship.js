// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
    //   PREP
    //   Parameters
    //   A string containing a single word.
    //   The string is always lowercase characters.
    //   The string will never be empty.
      
    //   Return
    //   The numerical value of a word based on the sum of the alphabetical positions of its characters
      
    //   Example
    //   l + o + v + e = 54
    //   f + r + i + e + n + d + s + h + i + p = 108
      
    //   Pseudocode
    //   Convert the string to an array using the split('') method
    //   For each letter, using the map method, retrieve the numerical value based on the alphabetical position via the charCodeAt() method
    //   Reduce the array of numbers to a single number and return that number
      
    let letterArray = string.split('')
                            .map((letter) => letter.charCodeAt() - 96)
                            .reduce((sum, cur) => sum + cur, 0)
    
    return letterArray
}