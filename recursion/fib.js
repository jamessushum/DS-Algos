// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8...
// Which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

function fib(num) {
  // Base case; if num is less than or equal to 2 return 1
  if (num <= 2) return 1;
  // Recursive block
  return fib(num - 1) + fib(num - 2);
}

// fib(2) = 1 => 1,1
// fib(3) = 2 => 1,1,2
// fib(4) = 3 => 1,1,2,3

// num has to be at least 2

// (4-1) + (4-2)
// (3-1) + (3-2) + return 1
// return 1 + return 1
// 3

// (3-1) + (3-2)
// return 1 + return 1
// 2

// (5-1) + (5-2)
// (4-1) + (4-2) + (3-1) + (3-2)
// (3-1) + (3-2) + return 1 + return 1 + return 1
// return 1 + return 1
// 5

console.log(fib(4));
