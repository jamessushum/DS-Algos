// Write a function called binarySearch which accepts a SORTED array and a value
// Returns the index at which the value exists
// Otherwise return -1

// Function accepts a sorted array and a value
// Create a left pointer at the start of the array and a right pointer at the end of the array
// While the left pointer comes before the right pointer
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1

// Time complexity: O(log n)
// Log n = x or 2^x = n
// When input data doubles (n doubles), only one extra step is added (x is increased by one)

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const val = 8;
console.log(binarySearch(arr, val));
// console.log(binarySearch2(arr, val));

// <----- Alternate solution ----->

function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}
