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

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.ceil((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle;
    } else {
      right = middle;
    }
  }

  return -1;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const val = 8;
console.log(binarySearch(arr, val));
