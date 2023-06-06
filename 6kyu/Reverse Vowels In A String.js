// link: https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str) {
  const reg = /[aeiou]/gi;
  const reg1 = /[aeiou]/i;
  const arr = str.split("");
  const rev = str.match(reg)?.reverse();
  let from = 0;
  for (let i = 0; i < arr.length; i++) {
    if (reg1.test(arr[i])) {
      arr[i] = rev[from];
      from++;
    }
  }
  return arr.join("");
}
