// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  // Base case; return 1 when array is empty so previous value can return itself ex. 3 x 1 = 3
  if (arr.length === 0) return 1;

  // Multiply value at 0 index with recursive value (passing in sliced array at 1 index)
  return arr[0] * productOfArray(arr.slice(1));
}

// [1, 2, 3] = 6
// 1 * [2, 3]
//      2 * [3]
//           3 * []
//                return 1

const arr = [1, 2, 3];
console.log(productOfArray(arr));
