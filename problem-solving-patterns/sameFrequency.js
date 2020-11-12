// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  // Convert integers to strings since integers are not iterable
  const num1Conv = num1.toString();
  const num2Conv = num2.toString();

  console.log(num1Conv, num2Conv);

  if (num1Conv.length !== num2Conv.length) {
    return false;
  }

  const counter = {};

  for (let digit of num1Conv) {
    counter[digit] ? counter[digit]++ : (counter[digit] = 1);
  }

  console.log(counter);

  for (let digit of num2Conv) {
    if (!counter[digit]) {
      return false;
    } else {
      counter[digit]--;
    }
  }

  return true;
}

// 182, 281 => true
// 34, 14 => false

const num1 = 182;
const num2 = 281;
console.log(sameFrequency(num1, num2));
