// link: https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

function mostLikely(...args) {
  const [a, b] = args[0].split(":");
  const [d, c] = args[1].split(":");
  return a / b > d / c;
}
