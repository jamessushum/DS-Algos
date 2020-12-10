// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted

// Pseudocode:
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (the left side) to place the element in the correct place
// Repeat until the array is sorted

// Time complexity:
// In general worst case, O(n^2)
// Best case, O(n)
// Good for online data (sorting live data as they're received) since left side of array is always sorted
// Space complexity: O(1)

function insertionSort(arr) {
  // Iterate through array starting in the second element
  for (let i = 1; i < arr.length; i++) {
    // Keep track of current value
    let currentVal = arr[i];
    // Keep track of previous value (index)
    let j = i - 1;
    // Iterate through left side of the array (reverse) while previous value is greater than or equal to 0 and greater than current value
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Assigning current value to previous value location
    arr[j + 1] = currentVal;
  }
  return arr;
}

// [2, 1, 5, 3, 4]

const arr = [2, 1, 5, 3, 4];
console.log(insertionSort(arr));
