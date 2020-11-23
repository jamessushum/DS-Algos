// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

function power(base, exponent) {
  // Base case; once exponent reaches 0 return 1 since base^0 = 1
  if (exponent === 0) return 1;

  // Recursive code block; multiply base by recursive method, decreasing exponent by 1 on each recursive loop until it reaches 1
  return base * power(base, exponent - 1);
}

// 2^4 = 2 x 2 x 2 x 2 = 16
// 2^4 = 2 x (2 x 2 x 2) => 2 x 2^3
// 2^4 = 2 x 2 x (2 x 2) => 2 x 2 x 2^2
// 2^4 = 2 x 2 x 2 x (2) => 2 x 2 x 2 x 2^1

const base = 2;
const exponent = 4;
console.log(power(base, exponent));

// 2 x power(2, 3)
//     2 x power(2, 2)
//          2 x power(2, 1)
//              2 x power(2, 0)
//                  return 1

// 16
