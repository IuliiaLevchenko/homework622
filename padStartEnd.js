// Function for adding symbols to the string
function padStartEnd(string, length, symbol, direction) {
  // Length of symbols which should be added
  if (direction === "true") {
    if (length > string.length) {
      let addLength = length - string.length;
      for (let index = 0; index < addLength; index++) {
        string = symbol + string;
      }
    }
  } else {
    if (length > string.length) {
      let addLength = length - string.length;
      for (let index = 0; index < addLength; index++) {
        string += symbol;
      }
    }
  }

  document.getElementById("output").innerHTML = string;
}
