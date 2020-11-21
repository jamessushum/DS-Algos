// Function to collect all odd values from array using recursion helper method

function collectOddValues(arr) {
  // Initialize local variable to hold result
  let result = [];

  // Recursion helper method
  function helper(helperInput) {
    // Check if input array is empty, if so return; this is the base case for our recursive method
    if (helperInput.length === 0) {
      return;
    }

    // Check if first item in array is odd,  if so push value to result array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // Invoke recursive method passing in new array without the first item or 0 index
    helper(helperInput.slice(1));
  }

  // Invoke recursion helper method passing in array
  helper(arr);

  // Returning result array with odd values
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(collectOddValues(arr));
