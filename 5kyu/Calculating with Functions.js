// link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const zero = (o) => (!o ? 0 : o(0));
const one = (o) => (!o ? 1 : o(1));
const two = (o) => (!o ? 2 : o(2));
const three = (o) => (!o ? 3 : o(3));
const four = (o) => (!o ? 4 : o(4));
const five = (o) => (!o ? 5 : o(5));
const six = (o) => (!o ? 6 : o(6));
const seven = (o) => (!o ? 7 : o(7));
const eight = (o) => (!o ? 8 : o(8));
const nine = (o) => (!o ? 9 : o(9));

const plus = (n) => (s) => s + n;
const minus = (n) => (s) => s - n;
const times = (n) => (s) => n * s;
const dividedBy = (n) => (s) => Math.floor(s / n);
