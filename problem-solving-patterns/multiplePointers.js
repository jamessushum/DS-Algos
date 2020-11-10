// Write a function called sumZero which accepts a SORTED array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  // Instantiate left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // Iterate through array and stop before the left pointer crosses the right pointer, otherwise we'll get 0 a false positive
  while (left < right) {
    let sum = arr[left] + arr[right];

    // Check if sum is equal to 0, if so return array with left and right pointer values
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // Move right pointer down by 1 when sum is greater than 0, sum keeps getting bigger if we move the left pointer up while keeping right pointer in place
      right--;
    } else {
      // Move the left pointer up by 1 when sum is less than 0, sum keeps getting smaller if we move the right pointer down while keeping left pointer in place
      left++;
    }
  }
}

const arr = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumZero(arr));
