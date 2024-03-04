// Your task is to write function factorial.

function factorial(n) {
  //   PREP
  //   Parameters
  //   - An integer, 0 or above
  //   Return
  //   - The factorial of that integer
  //   Examples
  //   - Test.assertEquals(factorial(0), 1);
  //   - Test.assertEquals(factorial(1), 1);
  //   - Test.assertEquals(factorial(4), 24);
  //   Pseudocode
  //   - Create a callback function that runs as long as n != 0
  //   - The function multiplies n by the factorial of n - 1
  if (n === 0) return 1
  return n * factorial(n - 1)
}
