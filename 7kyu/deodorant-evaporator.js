// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

function evaporator(content, evap_per_day, threshold) {
  //   PREP
  //   Parameters
  //   - content: content in ml
  //   - evap_per_day: percentage of gas lost each day
  //   - threshold: percentage beyond which the evaporator is no longer useful
  //   - All positive
  //   Return
  //   - The nth day on which the evaporator will be out of use
  //   Examples
  //   - evaporator(10, 10, 5) -> 29
  //   - evaporator(10, 10, 10) -> 22
  //   Pseudocode
  //   Each day you lose a % of the content, once it passes the threshold, it is not useful
  //   While content is greater than threshold, loop and increase the return value by 1
  //   Each day, you lose x% of content
  let days = 0
  let gas = 100
  while (gas >= threshold) {
    gas -= (gas * evap_per_day) / 100
    days++
  }
  return days
}
