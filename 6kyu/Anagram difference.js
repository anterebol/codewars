// link: https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.
// When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

function anagramDifference(w1, w2) {
  let str1 = w1;
  let str2 = w2;
  for (let i = 0; i < w1.length; i++) {
    str2 = str2.replace(w1[i], "");
  }
  for (let i = 0; i < w2.length; i++) {
    str1 = str1.replace(w2[i], "");
  }
  return str1.length + str2.length;
}
