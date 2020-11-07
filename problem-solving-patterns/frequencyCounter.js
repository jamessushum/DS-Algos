// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1, arr2) {
  // Check if initial array lengths match, otherwise return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Instantiate objects to hold array values
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Iterate through first array and create key with value of 1 if key does not already exist, otherwise if key exists add 1
  for (let i = 0; i < arr1.length; i++) {
    if (frequencyCounter1[arr1[i]]) {
      frequencyCounter1[arr1[i]] += 1;
    } else {
      frequencyCounter1[arr1[i]] = 1;
    }
  }

  // Iterate through second array and create key with value of 1 if key does not already exist, otherwise if key exists add 1
  for (let i = 0; i < arr2.length; i++) {
    if (frequencyCounter2[arr2[i]]) {
      frequencyCounter2[arr2[i]] += 1;
    } else {
      frequencyCounter2[arr2[i]] = 1;
    }
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // Iterate through keys in object1 and check if key1 squared is found in object2, if not found return false
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Additionally, check if value of key1 squared in object2 matches value of key1 in object1 (checks counter for correct number of duplicates)
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 3, 2, 3, 4];
const arr2 = [4, 1, 9, 9, 16];

console.log(same(arr1, arr2));
console.log(same2(arr1, arr2));

// <----- Same function refactored ----->

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  for (let num of arr1) {
    counter1[num] ? counter1[num]++ : (counter1[num] = 1);
  }

  for (let num of arr2) {
    counter2[num] ? counter2[num]++ : (counter2[num] = 1);
  }

  console.log(counter1);
  console.log(counter2);

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }

  return true;
}
