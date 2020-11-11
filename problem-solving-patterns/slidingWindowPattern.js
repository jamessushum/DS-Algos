// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
  // Instantiate variables to hold max sum and temporary sum values
  let maxSum = 0;
  let tempSum = 0;

  // Check if array length is less than n (num), if so return null (handles arrays with not enough n consecutive numbers)
  if (arr.length < num) {
    return null;
  }

  // Iterate through array to find the first n (num) consecutive sum of values
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Assign initial tempSum value equal to the initial maxSum value
  tempSum = maxSum;

  // Iterate through array starting at n (num)
  for (let i = num; i < arr.length; i++) {
    // Assign new tempSum value by substracting the last num (to the left) and adding the current index value at (i)
    tempSum = tempSum - arr[i - num] + arr[i];

    // Assign maxSum to the highest value of either the current maxSum value or new tempSum value
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const arr = [2, 6, 9, 3, 1, 8, 5, 6, 3];
const num = 3;
const arr2 = [];
console.log(maxSubarraySum(arr, num));

// [2, 6, 9, 3, 1, 8, 5, 6, 3], 3 => 19
// 2 + 6 + 9 = 17
// 6 + 9 + 3 = 18 => 17 - 2 (previous) + 3 (next)
