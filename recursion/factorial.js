function factorial(num) {
  debugger;
  // Base case; return 1 once num reaches 1
  if (num === 1) return 1;

  // Recursive code block
  return num * factorial(num - 1);
}

// 3! = 3 x 2 x 1 => 3 x 2! (2 x 1)

console.log(factorial(3));

// <----- Alternative solution iteratively ----->

function factorial2(num) {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

console.log(factorial2(4));
