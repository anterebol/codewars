// link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  if (s.length === 1) return s[0];
  if (s === "") return "";
  let str = s;
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    const k = str.indexOf(str[i], i + 1);
    if (k < 0) {
      const result1 = s.indexOf(str[i]);
      const result2 = s.indexOf(str[i].toUpperCase());
      return result1 < 0 ? s[result2] : s[result1];
    }
    str.splice(i, 1);
    str.splice(k - 1, 1);
    i = -1;
  }
  return "";
}
