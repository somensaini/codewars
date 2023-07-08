// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// My Solution
function moveZeros(arr) {
    return arr.sort(compareFn)
  }
  
  function compareFn(a, b) {
    if (b === 0) {
      return -1;
    }
  }