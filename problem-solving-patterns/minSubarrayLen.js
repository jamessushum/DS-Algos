// Write a function called minSubarrayLen which accepts two parameters, an array of positive integers and a positive integer.
// The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed.
// If there isn't one, return 0.

function minSubarrayLen(arr, num) {
  // Instantiating variables for initial total sum, starting and ending index, and min length (infinity otherwise if 0 it'll always be the shortest)
  let totalSum = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  // Iterating through array
  while (start < arr.length) {
    // If total sum is less than target num and ending index is less than array length, add value at array[end] to total sum and increase ending index by 1
    if (totalSum < num && end < arr.length) {
      totalSum += arr[end];
      end++;
    } else if (totalSum >= num) {
      // If total sum is equal to or greater than target num, find the min length between current minLength and (ending index - starting index)
      // Then subtract total sum by array[start] and increase starting index by 1
      minLength = Math.min(minLength, end - start);
      totalSum -= arr[start];
      start++;
    } else {
      // If total sum is less than target num but indexes have reached the end of the array, break out of loop otherwise stuck in infinite loop
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// [2, 3, 1, 2, 4, 3], 7 => 2 since [4, 3] is the smallest subarray
// [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 10], 52 => 1 since [62] is greater than 52

const nums = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 10];
const sum = 52;
console.log(minSubarrayLen(nums, sum));
