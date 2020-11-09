// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Assuming strings are lowercased and there are no spaces in between.

function validAnagram(str1, str2) {
  // Check to make sure lengths of both strings equal, otherwise return false
  if (str1.length !== str2.length) {
    return false;
  }

  // Instantiate empty objects to hold and count characters from strings
  const count1 = {};
  const count2 = {};

  // Iterate through each character in string1 and assign key with value of 1 in counter, if key already exists in counter just add 1
  for (let char of str1) {
    count1[char] ? count1[char]++ : (count1[char] = 1);
  }

  // Iterate through each character in string2 and assign key with value of 1 in counter, if key already exists in counter just add 1
  for (let char of str2) {
    count2[char] ? count2[char]++ : (count2[char] = 1);
  }

  console.log(count1);
  console.log(count2);

  // Iterate through keys in count1 and check if it exists in count2, otherwise return false
  for (let key in count1) {
    if (!(key in count2)) {
      return false;
    }

    // Check to make sure the values of key found in both count1 and count2 match, otherwise return false (checks for multiple of same letters)
    if (count2[key] !== count1[key]) {
      return false;
    }
  }

  return true;
}

const str1 = "anagram";
const str2 = "nagaram";

console.log(validAnagram(str1, str2));
console.log(validAnagram2(str1, str2));

// <----- Alternative Solution ----->

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  console.log(counter);

  for (let i = 0; i < str2.length; i++) {
    debugger;
    let char = str2[i];
    if (!counter[char]) {
      return false;
    } else {
      counter[char] -= 1;
    }
  }

  return true;
}
