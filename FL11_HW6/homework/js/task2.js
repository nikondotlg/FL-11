// receiving triangle sides information.
const a = +prompt('Please, enter A value of your triangle!');
const b = +prompt('Please, enter B value of your triangle!');
const c = +prompt('Please, enter C value of your triangle!');
// check if entered num is positive and > 0; if triangle exists; its type.
if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Equivalent triangle');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}