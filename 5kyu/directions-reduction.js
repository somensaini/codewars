// Task

// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr) {
  // PREP
  // Parameters
  //   - An array of strings (North East South West)
  // Return
  //   - A reduced array of strings, eliminating any directly opposite directions, can be empty
  // Example
  //   - 			["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
  // 	 -    	["WEST"]
  // Pseudocode
  //   - Loop through the array
  //   - For each direction, check that the next direction is not the direct opposite
  //   - If they are opposites, move to the next direction in the array
  //   - If they are not opposites, add the first direction to a new array
  //   - Return the new array

  const opposite = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    WEST: "EAST",
    EAST: "WEST",
  }
  return arr.reduce((a, b, i) => {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}
