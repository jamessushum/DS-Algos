// Write a function called isSubsequence which takes in two strings
// Checks whether the characters in the first string form a subsequence of the characters in the second string
// The function should check whether the characters in the first string appear somewhere in the second string, without their order changing

function isSubsequence(str1, str2) {
  // Check if string2 length is less than string1 length, if so return false. This means str2 does not carry all of str1 chars
  if (str2.length < str1.length) {
    return false;
  }

  // Instantiate pointer for string1 at 0 index
  let str1Pointer = 0;

  // Iterate through string2, increasing pointer i by 1 on every iteration
  for (let i = 0; i < str2.length; i++) {
    // Check if char at string2[i] equals char at str1[pointer], if so increase str1 pointer by 1
    if (str2[i] === str1[str1Pointer]) {
      str1Pointer++;
    }

    // Check if str1 pointer equals str1 length, if so return true. This means that all chars in str1 were found in str2 (sequentially).
    // Remember that pointer in str1 increases everytime the chars in str2 and str1 matches
    if (str1Pointer === str1.length) {
      return true;
    }
  }

  // If the above code block does not return true, return false.
  // This means the entire str2 was iterated through but not all chars in str1 were found
  return false;
}

// 'hello', 'hello world' => true
// 'sing', 'sting' => true
// 'abc', 'acb' => false

const str1 = "sing";
const str2 = "string";
console.log(isSubsequence(str1, str2));
