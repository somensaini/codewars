// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// A power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
// You may assume the input is always valid.

function isPowerOfTwo(n) {
  //   PREP
  //   Parameters
  //   - Non-negative integer
  //   - Inputs are always valid
  //   Return
  //   - True or False if it is a power of two
  //   Examples
  //    isPowerOfTwo(1024) // -> true
  //    isPowerOfTwo(4096) // -> true
  //    isPowerOfTwo(333)  // -> false
  //   Pseudocode
  //   - A power of two is a number of the form 2^n where n is an integer, that is,
  //   the result of exponentiation with number two as the base and integer n as the exponent.
  return Math.log2(n) % 1 === 0
}
