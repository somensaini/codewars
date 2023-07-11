// Task

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :

//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

// My Solution
function maxMultiple(divisor, bound){
    let n = bound
    
    while (n <= bound){
      if (n % divisor == 0){
        return n
      }else{
        n--
      }
    }  
  }