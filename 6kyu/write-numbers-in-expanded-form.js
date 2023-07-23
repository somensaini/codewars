// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

// My Solution
function expandedForm(num){
    //Parameters
    //A number that is a whole number greater than 0
    
    //Return
    //Return the number as a string in expanded form
    
    //Example
    //   expandedForm(4265) = 4 × 1,000 + 2 × 100 + 6 × 10 + 5 × 1
    //   expandedForm(12); // Should return '10 + 2'
    //   expandedForm(42); // Should return '40 + 2'
    //   expandedForm(70304); // Should return '70000 + 300 + 4'
  
    //Pseudocode
    //You'll need to iterate over the number, so split the digits into an array
    //For each digit, starting from the right side (reverse?), multiply the digit by 1, 10, 100, ...
    //Join the array using ' + ' symbol, convert to String if necessary
    return Array.from(num.toString())
                .reverse()
                .map((digit, index) => digit * Math.pow(10, index))
                .filter(num => num > 0)
                .reverse()
                .join(' + ')
  }