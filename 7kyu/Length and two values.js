// link: https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

const alternate = (n, firstValue, secondValue) =>
  new Array(n)
    .fill("")
    .map((item, i) => (i % 2 === 0 ? firstValue : secondValue));
