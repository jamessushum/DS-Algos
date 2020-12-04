// JavaScript built-in sort method does not sort numbers properly due to Unicode code point value
const arr = [6, 4, 15, 10];
console.log(arr.sort()); // [10, 15, 4, 6]

// To by-pass, the built-in sort method accepts an optional comparator function
// You can use this comparator function to tell JavaScript how you want it to sort
// The comparator looks at pairs of elements (a and b) and determines their sort order based on the return value
// If it returns a negative number, a should come before b
// If it returns a positive number, a should come after b
// If it returns 0, a and b are the same as far as the sort is concerned
function numberCompare(num1, num2) {
  // Sorts by ascending
  return num1 - num2;
  // Sorts by descending
  // return num2 - num1;
}

console.log(arr.sort(numberCompare));

// Ex. can also compare strings by length
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

const arr2 = ["Steele", "Colt", "Data Structures", "Algorithms"];
console.log(arr2.sort(compareByLen));
