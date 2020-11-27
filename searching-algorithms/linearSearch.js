// Write a function called linearSearch which accepts an array and a value
// Return the index at which the value exists
// If the value does not exist in the array, return -1

// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

// Time complexity: O(n)
// Linear - complexity grows in direct proportion to the size of the input data

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

const arr = [10, 15, 20, 25, 30];
const val = 15;
console.log(linearSearch(arr, val));
