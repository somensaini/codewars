// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

let greet = function (name) {
  return `Hello ${
    name[0].toUpperCase() + name.split("").slice(1).join("").toLowerCase()
  }!`
}
