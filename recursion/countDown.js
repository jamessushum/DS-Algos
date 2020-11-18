function countDownRecursive(num) {
  // Need base case otherwise infinite loop, stop when num is less than or equal to 0
  if (num <= 0) {
    console.log("All Done!");
    // Return needed to stop function, alternatively wrap execution code below in else statement
    return;
  }

  // Execution code calls same function with DIFFERENT input
  console.log(num);
  num--;
  countDownRecursive(num);
}

console.log(countDownRecursive(5));

// <----- Alternative solution without recursion ------>

function countDown(num) {
  debugger;
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done!");
}

console.log(countDown(5));
