// link: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

const snail = function (array) {
  const result = [];
  let l = array.length * array[0].length;
  let h = 0;
  let v = 0;
  while (l) {
    const point = array[v][h];
    if (point) {
      result.push(point);
      array[v][h] = undefined;
      l--;
      if (array?.[v]?.[h + 1] && !array?.[v - 1]?.[h]) {
        h++;
      } else if (array?.[v + 1]?.[h]) {
        v++;
      } else if (array?.[v]?.[h - 1]) {
        h--;
      } else if (array?.[v - 1]?.[h]) {
        v--;
      } else {
        break;
      }
    }
  }
  return result;
};
