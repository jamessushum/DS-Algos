// Implement a function called countUniqueValues, which accepts a SORTED array and counts the unique values in the array.
// There can be negative values in the array but it will always be sorted.

function countUniqueValues(arr) {
  // Check if array is empty, if so return 0
  if (arr.length === 0) {
    return 0;
  }

  // Instantiate left and right pointers, pointers are going to start next to each other
  let left = 0;
  let right = 1;

  // Iterate though array stopping at array length and moving right pointer up by 1 on each iteration
  for (right; right < arr.length; right++) {
    // Variable holding boolean value checking if left and right pointer values are unique
    let isUnique = arr[left] !== arr[right];

    // Code block executes when left and right pointer values are unique (don't equal)
    if (isUnique) {
      // Moving left pointer up by 1
      left++;
      // Assigning left pointer value equal to right pointer value
      arr[left] = arr[right];
    }
  }

  // Returning left pointer index plus 1, the length of unique values
  return left + 1;
}

//                     i
// [1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]
//                                    j

const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const arr2 = [];
const arr3 = [1, 1, 1, 1];
const arr4 = [-3, -3, -2, -1, -1, 0, 1, 2, 2, 3, 4];
// console.log(countUniqueValues(arr4));
console.log(countUniqueValues2(arr4));

// <----- Function Refactored Without Manipulating Current Array ----->

function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  let uniqueValues = [arr[left]];

  for (right; right < arr.length; right++) {
    let isUnique = uniqueValues[left] !== arr[right];

    if (isUnique) {
      uniqueValues.push(arr[right]);
      left++;
    }
  }

  return uniqueValues.length;
}
