// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
  const regex = /[a-z]/g
  if (str.match(regex)) return str.match(regex).length
  return 0
}
