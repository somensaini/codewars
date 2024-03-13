// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  //   PREP
  //   Parameters
  //   - An integer
  //   Return
  //   - A diamond string
  //   Examples
  //   3:
  //      *
  //     ***
  //      *
  //   Pseudocode
  //   - If even or negative, return null
  //   - For loop n times
  //   - Start with 1 star, increase by 2 until you are at n / 2 loops rounded up, then decrease by 2
  if (n % 2 === 0 || n <= 0) return null

  let string = ""

  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2)
    string += " ".repeat(len)
    string += "*".repeat(n - 2 * len)
    string += "\n"
  }

  return string
}
