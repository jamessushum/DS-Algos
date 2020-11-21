// Function to collect all odd values in array using pure recursion method

function collectOddValues(arr) {
  // Initialize variable to hold odd values found temporarily, this will reset when method is called recursively
  let newArr = [];

  // Base case; return new array when array is empty
  if (arr.length === 0) {
    return newArr;
  }

  // Check if value at index 0 is odd, if so push to newArr
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // Recursively invoking collectOddValues method passing in array without first value or index 0
  // Concatenating newArr at every recursive call then assigning to previous newArr
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(collectOddValues(arr));

// Pure Recursion Tips
// For arrays, use methods like slice, the spread operator, and concat to make copies of arrays so the original is not mutated
// Strings are immutable so use methods like slice, substr, or substring to make copies of strings
// Make copies of objects using Object.assign, or the spread operator
