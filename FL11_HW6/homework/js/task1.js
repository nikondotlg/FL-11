// receiving information
const a1 = +prompt('Enter X value for A.');
const a2 = +prompt('Enter Y value for A.');
const b1 = +prompt('Enter X value for B.');
const b2 = +prompt('Enter Y value for B.');
const c1 = +prompt('Enter X value for C.');
const c2 = +prompt('Enter Y value for C.');
const half = 2;
// check if C divides by half
if ((a1 + b1) / half === c1 && (a2 + b2) / half === c2) {
  console.log(true);
} else {
  console.log(false);
}