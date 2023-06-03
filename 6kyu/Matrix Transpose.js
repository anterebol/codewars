// link: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript
// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

function transpose(matrix) {
  const g = [];
  for (let i = 0; i < matrix[0].length; i++) {
    g.push([]);
    for (let k = 0; k < matrix.length; k++) {
      g[i].push(matrix[k][i]);
    }
  }
  return g;
}
