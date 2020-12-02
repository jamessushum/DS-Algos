// wowomgzomg
// omg

// Naive solution:
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function stringSearch(string, subString) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== string[i + j]) {
        break;
      }
      if (j === subString.length - 1) {
        count++;
      }
    }
  }

  return count;
}

const string = "wowomgzomg";
const subString = "omg";
// console.log(stringSearch(string, subString));
console.log(kmpMatching(string, subString));

// <----- Solution using KMP Algorithm ----->

// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
function longestPrefix(str) {
  // Create a table of size equal to the length of str
  // Table[i] will store the prefix of the longest prefix of the substring str[0..i]
  let table = new Array(str.length);
  let maxPrefix = 0;

  // The longest prefix of the substring str[0] has length
  table[0] = 0;

  // For the substrings, we have two cases
  for (let i = 1; i < str.length; i++) {
    // Case 1 - the current character doesn't match the last character of the longest prefix
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      // If the is the case, we have to backtrack and try to find a character that will be equal to the current character
      // If we reach 0, then we couldn't find a character
      maxPrefix = table[maxPrefix - 1];
    }

    // Case 2 - the last character of the longest prefix matches the current character in str
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      // If that is the case, we know that the longest prefix at position i has one more character
      // For ex. consider '-' be any character not contained in the set [a-c]
      // str = a b c - - - - abc
      // Consider 'i' to be the last character 'c' in 'str'
      // maxPrefix = will be 2 (the first 'c' in 'str')
      // maxPrefix now will be 3
      maxPrefix++;
      // So the max prefix for table[9] is 3
    }

    table[i] = maxPrefix;
  }

  return table;
}

// Find all the patterns that matches in a given string str
// Knuth-Morris-Pratt algorithm performs the matching in O(n)
function kmpMatching(str, pattern) {
  // Find the prefix table in O(n)
  let prefixes = longestPrefix(pattern);
  let matches = [];

  // 'j' is the index in the pattern 'P'
  // 'i' is the index in the string 'S'
  let j = 0;
  let i = 0;

  while (i < str.length) {
    // Case 1 - S[i] == P[j] so we move to the next index in 'S' and 'P'
    if (str.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
    }

    // Case 2 - 'j' is equal to the length of 'P'
    // That means that we reached the end of 'P' and thus we found a match
    if (j === pattern.length) {
      matches.push(i - j);
      // Next we update 'j' because we want to save some time
      // Instead of updating j = 0, we can jump to the last character of the longest prefix known so far
      // j - 1 means the last character of 'P' because j is actually 'P.length'
      // Ex.
      // S = a b a b d e
      // P = 'a b' a b
      // We will jump to 'a b' and compare d and a in the next iteration
      // a b a b 'd' e
      //     a b 'a' b
      j = prefixes[j - 1];
    }

    // Case 3 - S[i] != P[j] there's a mismatch
    else if (str.charAt(i) !== pattern.charAt(j)) {
      // If we have found at least a character in common, do the same thing as in case 2
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        // Otherwise j = 0, and we can move to the next character S[i + 1]
        i++;
      }
    }
  }

  return matches;
}
