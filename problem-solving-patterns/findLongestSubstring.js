// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  // Initiate variables to keep track of the longest substring seen, all characters seen, and start of sliding window
  let longest = 0;
  let seen = {};
  let start = 0;

  // Iterate through each character in string
  for (let i = 0; i < str.length; i++) {
    // Initiate variable to hold current character
    let char = str[i];

    // Check if char is in the seen object
    // If true set the start of sliding window to the max of either current start value or the value of seen[char] (which is the index of the char after the matched char, we're starting the new window after the char has been found)
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Otherwise if char has not yet been seen, add new char to the seen object with the index of the next char
    seen[char] = i + 1;

    // Additionally, set the longest variable to either the max of the current longest value or the difference between the current index and starting window index plus 1 (i - start + 1) adding 1 at end since we want the length not the index
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}

// 'thisisawesome' => 6
// 'bbbbbbbb' => 1
// '' => 0
// 'longestsubstring' => 8

const str = "longestsubstring";
console.log(findLongestSubstring(str));
