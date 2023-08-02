//   PREP
//   Parameters
//   - Positive integer between 1 and 3999 (inclusive)
//   - Remember that there can't be more than 3 identical symbols in a row.
//   Return
//   - A string containing the roman numeral representation
//   Examples
//   - solution(1000); // should return 'M'
//   Pseudocode
//   - Create a cache object containing number : value pairs
//   - Convert the given number into a string and split it into an array
//   - For each number, convert it to the roman numeral equivalent using the cache
//   - Join the array and return the number
  
function solution(number){
  let result = ''
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  decimals.map( (value, index) => {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}