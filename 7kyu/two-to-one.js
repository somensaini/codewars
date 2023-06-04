// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Solution
function longest(s1, s2) {
    let str = ""
    
    s1 = s1.split('').filter(letter => !s2.includes(letter))
    s2 = s2.split('').concat(s1)
    
    for (let i = 0; i < s2.length; i++){
      if (!str.includes(s2[i])){
        str += s2[i]
      }
    }
    
    return str.split('').sort((a, b) => a.localeCompare(b)).join('')
  }