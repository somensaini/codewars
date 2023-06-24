// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// My Solution
function towerBuilder(nFloors) {
    let arr = []
    let space = ' '
    let asterisk = '*'
    
    for (let i = 0; i < nFloors; i++){
      arr.push(space.repeat(nFloors - i - 1) + 
              asterisk.repeat(1 + (i * 2)) +
              space.repeat(nFloors - i - 1))
    }
    
    return arr
  }