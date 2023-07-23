// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
// Note
// consecutive strings : follow one after another without an interruption

// My Solution
  //PARAMETERS
  //strarr - array of strings
  //k - integer
  //n - length of string array, if n = 0 or k > n or k <= 0 return 'Nothing'
  
  //RETURN
  // the first longest string consisting of k consecutive strings
  
  //EXAMPLE
  // strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
  // Concatenate the consecutive strings of strarr by 2, we get:

  // treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
  // folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
  // trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
  // blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
  // abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
  
  // Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
  // The first that came is "folingtrashy" so 
  // longest_consec(strarr, 2) should return "folingtrashy".
  
  //PSEUDOCODE
  
  //First check the length of the array. If it's 0 or k is greater than the length, 
  //or if k is less than or equal to 0, return ''
  //Iterate over the array, and concatenate the strings by k amount
  //Check the length of each string, and return the longest string. If there is more than 1 string with the longest length, return the first.
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length){return ""}
  
  return strarr.map((value, index) => (strarr.slice(index, index+k).join('')))
               .reduce((longest, current) => current.length > longest.length ? current : longest)
}
