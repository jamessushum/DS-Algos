// Write a function called recursiveRange
// Which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  // Base case; once num reaches 0 return 0
  if (num === 0) return 0;

  // Add num to value returned by recursive method passing in num - 1 on each iteration
  return num + recursiveRange(num - 1);
}

// 3 => 0 + 1 + 2 + 3 = 6
// 3 + (3 - 1)
//      2 + (2 - 1)
//           1 + (1 - 1)
//                return 0

const num = 3;
console.log(recursiveRange(num));
