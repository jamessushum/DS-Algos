// Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum of a subarray
// with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// Ex. [100, 200, 300] is a subarray of [100, 200, 300, 400], but [100, 300] is not.

function maxSubarraySum(arr, num) {
  // Check if array length is less than n (consecutive numbers), if so return null
  if (arr.length < num) {
    return null;
  }

  // Instantiate variables storing maximum sum and temporary sum
  let maxSum = 0;
  let tempSum = 0;

  // Find initial sum of first n (numbers) in array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Make initial tempSum equal to initial maxSum
  tempSum = maxSum;

  // Iterate through array starting at num
  for (let i = num; i < arr.length; i++) {
    // Find tempSum by subtracting initial tempSum to value at previous index (i - num) and then adding the value at current index (i)
    tempSum = tempSum - arr[i - num] + arr[i];

    // Compare tempSum to maxSum to find the greatest value then assign as new maxSum
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

// [100, 200, 300, 400], 2 => 700
// [-3, 4, 0, -2, 6, -1], 2 => 5
// [2, 3], 3 => null

// [100, 200, 300, 400]
// 100 + 200 = 300 => 300 - 100 + 300 = 500 (200 + 300) => 500 - 200 + 400 = 700 (300 + 400)

const arr = [-3, 4, 0, -2, 6, -1];
const num = 2;
console.log(maxSubarraySum(arr, num));
