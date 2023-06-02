// link: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
function removeConsecutiveDuplicates(string) {
  let arr = string.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; ) {
    let double = 0;
    for (let k = i; k < arr.length; k++) {
      double += arr[i] === arr[k] ? 1 : 0;
      if (arr[i] !== arr[k]) {
        break;
      }
    }
    result += arr[i];
    i += double;
    result += i <= arr.length - 1 ? " " : "";
  }
  return result;
}
