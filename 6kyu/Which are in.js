// link: https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    for (let k = 0; k < array2.length; k++) {
      if (array2[k].indexOf(item) >= 0 && !result.includes(item)) {
        result.push(item);
      }
    }
  }
  return result.sort();
}
