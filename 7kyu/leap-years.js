// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.

// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  //   PREP
  //   Parameters
  //   - A integer, the year, between 1600 - 4000
  //   Return
  //   - True or False if the given year is a leap year
  //   Examples
  //   - 2000 : true
  //   - 2015 : false
  //   - 2100 : false
  //   Pseudocode
  //   - The year must be divisible by 4, but not by 100, unless its by 400
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
