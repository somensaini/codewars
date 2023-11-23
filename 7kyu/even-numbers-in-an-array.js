// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
    //   PREP
    //   Parameters
    //   - An array of numbers (array)
    //    - Will not be empty and will contain at least "number" even numbers
    //   - An integer (number)
      
    //   Return
    //   - Return a new array of length "number" containing the last even numbers from the original array (same order)
    //   - Return the last "number" even numbers from the original array
      
    //   Examples
    //   ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    //   ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    //   ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
      
    //   Pseudocode
    //   - Reverse the array or start from the end
    //   - Go through each value and check if it is an even number, if it is, push to a new array
    //   - Once the new array's length is equal to "number", reverse this array and return it
      
      let reversedArray = array.reverse()
      let newArr = []
      let index = 0
      
      do{
        if (reversedArray[index] % 2 === 0){
          newArr.push(reversedArray[index])
        }
        index++
      }while(newArr.length < number)
      
      return newArr.reverse()
    }