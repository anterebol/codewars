// link: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  if (isNaN(num)) return "NaN";
  return Math.abs(num)
    .toString()
    .split("")
    .map((item, index, arr) => {
      const r = Number(item) % 2;
      if (r !== 0) {
        if (index === arr.length - 1 && index === 0) return item;
        if (index === arr.length - 1) return `-${item}`;
        if (index === 0) return `${item}-`;
        return `-${item}-`;
      }
      return item;
    })
    .join("")
    .replace(/--/g, "-");
}
