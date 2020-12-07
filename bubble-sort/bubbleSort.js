// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top (ascending order)
// Start looping from the end of the array towards the beginning with variable called i
// Start inner loop from the beginning of the array with variable called j until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values
// Return the sorted array

function bubbleSort(arr) {
  // Starting i at arr.length instead of arr.length - 1 so we can iterate through the entire array on the 1st pass in the inner for-loop
  for (let i = arr.length; i > 0; i--) {
    // Checking if j is less than i - 1 inside for-loop so we don't have to iterate until the end of the array on the 2nd+ pass since the last value has already been determined to be the largest
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [37, 45, 29, 8];
console.log(bubbleSort(arr));
console.log(bubbleSort2(arr));

// <----- Alternative solution ----->

function bubbleSort2(arr) {
  // Define swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
