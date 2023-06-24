// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My Solution
function capitalize(s){
    let evenStr = ""
    let oddStr = ""
    
    for (let i = 0; i < s.length; i++){
      if (i % 2 == 0){
        evenStr += s[i].toUpperCase()    
      }else{
        evenStr += s[i]
      }
    }
    
    for (let i = 0; i < s.length; i++){
      if (i % 2 == 1){
        oddStr += s[i].toUpperCase()    
      }else{
        oddStr += s[i]
      }
    }
    
    return [evenStr, oddStr]
  };