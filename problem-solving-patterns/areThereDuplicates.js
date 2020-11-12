// Implement a function called areThereDuplicates which accepts a variable number of arguments.
// Check whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
  // Arguments object is an arrary-like object, special construct available inside all function calls
  // It represents the list of arguments that were passed in when invoking the function (see takeways section below for more info)
  const values = arguments;

  console.log(values);

  const counter = {};

  for (let val in values) {
    counter[values[val]] ? counter[values[val]]++ : (counter[values[val]] = 1);
  }

  console.log(counter);

  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }

  return false;
}

// 1, 2, 3 => false
// 1, 2, 2 => true
// 'a', 'b', 'c', 'a' => true

const var1 = 1;
const var2 = 2;
const var3 = "2";
console.log(areThereDuplicates(var1, var2, var3));
// console.log(areThereDuplicates2(var1, var2, var3));

// Initial questions:
// Can integers and strings be passed in at the same time?

// Takeaways:
// Keys in objects are converted to strings, ex 1 => '1'
// Arguments object is JavaScript specific
// Values in arguments can be accessed using indexing like an array ex. arguments[0]
// Arguments have access to the length array property
// NOTE! arguments behave like an array but are NOT actually arrays aka. does not respond to any array methods like .sort()
// For-Of loops will not work when iterating through arguments, must use For-In aka. treated as an object with keys (see implementation above)

// <----- Alternative Solution ----->

function areThereDuplicates2() {
  // Creates set of objects from arguments passed in and compares the number of elements in the object aka. size to the arguments length
  return new Set(arguments).size !== arguments.length;
}

// The Set object stores unique values of any type ex. 1, 2, 2 is stored as { 1, 2 }
// Deficiency with the alternative solution:
// Returns incorrect solution when both integers and strings are passed in as arguments ex. 1, 2, '2' stored as { 1, 2, '2' }
