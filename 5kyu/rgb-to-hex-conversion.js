// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  //   PREP
  //   Parameters
  //   - 3 Integers, must round to nearest value from 0 - 255
  //   Return
  //   - Converted Hex String

  //   Examples
  //   255, 255, 255 --> "FFFFFF"
  //   255, 255, 300 --> "FFFFFF"
  //   0, 0, 0       --> "000000"
  //   148, 0, 211   --> "9400D3"

  //   Pseudocode
  //   Convert each individual integer into the corresponding Hex value, then join the string and return it

  function padding(val) {
    return val.length === 1 ? "0" + val : val
  }

  function rounding(val) {
    return val < 0 ? 0 : val > 255 ? 255 : val
  }

  let rhex = padding(rounding(r).toString(16))
  let ghex = padding(rounding(g).toString(16))
  let bhex = padding(rounding(b).toString(16))

  return (rhex + ghex + bhex).toUpperCase()
}
