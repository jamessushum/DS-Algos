// wowomgzomg
// omg

// Naive solution:
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function stringSearch(string, subString) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== string[i + j]) {
        break;
      }
      if (j === subString.length - 1) {
        count++;
      }
    }
  }

  return count;
}

const string = "wowomgzomg";
const subString = "omg";
console.log(stringSearch(string, subString));
