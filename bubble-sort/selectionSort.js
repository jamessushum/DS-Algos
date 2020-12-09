// Selection Sort:
// Similar to bubble sort but instead of sorting by the largest value first it sorts by the smallest value

// Pseudocode:
// Store the first element of the array as the smallest value seen
// Compare this value to the next item in the array until a smaller number is found
// If a smaller number is found, designate that number as the new minimum or smallest value and continue until the end of the array
// If the new minimum or smallest value found is not the value (index) found initially, swap the two values
// Repeat with the next element until the array is sorted

// Time complexity:
// O(n^2), on average will have to iterate through each element in the array for every element
// Better than bubble sort when you want to reduce number of swaps (writing to memory) since selection sort swaps at the end of each loop

function selectionSort(arr) {
  // Declaring swap function
  const swap = (arr, i, min) => {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Check if initial min is NOT equal to new min, otherwise we'll be swapping the same index (value)
    if (i !== min) {
      swap(arr, i, min);
    }
  }

  return arr;
}

const arr = [34, 22, 10, 19, 17];
console.log(selectionSort(arr));
