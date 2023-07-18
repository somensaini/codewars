// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// My Solution
function comp(array1, array2){
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    return array1.map(e => e * e).every((e, i) => e == array2[i])
  }