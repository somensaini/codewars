// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution
function solution(str){
    if (str == "") return []
    str = str.match(/.{1,2}/g)
    
    for (let i = 0; i < str.length; i++){
      if (str[i].length == 1){
        str[i] += '_'
      }
    }
    
    return str
  }