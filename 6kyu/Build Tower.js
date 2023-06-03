// link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const arr = [1];
  const result = [];
  for (let i = 0; i < nFloors - 1; i++) {
    arr.push(arr[i] + 2);
  }
  const lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    let str = "*".repeat(arr[i]);
    if (arr[i] !== arr[lastIndex]) {
      const gap = " ".repeat((arr[lastIndex] - arr[i]) / 2);
      str = gap + str;
      str += gap;
    }
    result.push(str);
  }
  return result;
}
