// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My Solution
function removeUrlAnchor(url){
  let index = url.indexOf('#')
  
  if (index != -1){
    return url.slice(0, index)
  }
  
  return url
}