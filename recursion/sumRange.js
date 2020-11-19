// Function adds all numbers within the range starting from the number being passed in until 1
// Ex. num = 3 => 3 + 2 + 1 = 6

function sumRange(num) {
  // Base case; return 1 when num is equal to 1
  if (num === 1) return 1;

  // Recursive code block; adding num to the difference of num - 1
  // The key here is the different input being passed in to the recursive method
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
