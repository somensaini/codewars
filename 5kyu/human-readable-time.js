// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  //   PREP
  //   Parameters
  //   - Integer, seconds, non-negative
  //   Return
  //   - HH:MM:SS
  //   - All padded to two digits
  //   - HH range: 00 - 99
  //   - MM and SS range: 00 - 59
  //   Examples
  //     doTest(    59, '00:00:59');
  //     doTest(    90, '00:01:30');
  //     doTest(  3599, '00:59:59');
  //   Pseudocode
  //   Convert the seconds into hours if there are more than 3600 seconds
  //   Convert the seconds into minutes if there are more than 60 seconds
  //   Convert the rest into seconds
  //   Return the string

  let hours = parseInt(seconds / 3600)
  let minutes = parseInt(seconds / 60) % 60
  let secs = seconds % 60

  var pad = function (val) {
    return val < 10 ? "0" + val : val
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(secs)
}
