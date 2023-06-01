// link: https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
function maxProduct(a) {
  let largest = Math.max(...a);
  a.splice(
    a.findIndex((current) => largest === current),
    1
  );
  let larger = Math.max(...a);
  return larger * largest;
}
