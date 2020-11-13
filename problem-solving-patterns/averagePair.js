// Write a function called averagePair, given a SORTED array of integers and a target average
// Determine if there is a pair of values in the array where the average of the pair equals the target average
// There may be more than one pair that matches the average target

function averagePair(arr, num) {
  // Instantiate multiple pointers, starting at both ends of the array
  let left = 0;
  let right = arr.length - 1;

  // Iterate through array, stop before pointers cross
  while (left < right) {
    // Variable to store current average
    let avg = (arr[left] + arr[right]) / 2;

    // Check if average equals target average, if so return true
    if (avg === num) {
      return true;
    } else if (avg < num) {
      // If average is less than target, move left pointer up
      left++;
    } else {
      // Otherwise if average is greater than target, move right pointer down
      right--;
    }
  }

  return false;
}

//  i
// [1, 2, 3], 2.5 ==> true
//        j
// if avg is too small, move left pointer up
// if avg is too big, move right pointer down

const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19];
const num = 8;
console.log(averagePair(arr, num));
