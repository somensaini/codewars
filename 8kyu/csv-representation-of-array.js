// Create a function that returns the CSV representation of a two-dimensional numeric array.

//   PREP
//   Parameters
//   - A set of arrays within an array
//   - Array length is always > 2

//   Return
//   - A CSV-representation of the array as a string
  
//   Example
//   input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
//    output: '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
  
//   Pseudocode
//   Turn each array into 'arrayvalues\n'
//   Join the arrays with \n

function toCsvText(array) {
    return array.join('\n')
}