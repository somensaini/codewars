// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


// My Solution
function accum(s) {
    let newArr = s.split('').map((value, index) => value.replace(value, value.repeat(index+1)))
    for (let i = 0; i < newArr.length; i++){
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase();
    }
    return newArr.join('-')
  }