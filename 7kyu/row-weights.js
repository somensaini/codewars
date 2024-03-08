// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  let t1 = array
    .filter((v, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0)
  let t2 = array
    .filter((v, i) => i % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0)

  return [t1, t2]
}
