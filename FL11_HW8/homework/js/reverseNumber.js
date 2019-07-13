function reverseNumber(number) {
  let result;
  result = number.toString();
  result = result.split('');
  result = result.reverse();
  result = result.join('');
  result = parseFloat(result);
  result = result * Math.sign(number);
  return result;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(1000);

// v1
// let reversedNum = (num < 0) ? "-" : "";
//   num = String(Math.abs(num));
//   for (let i = num.length - 1; i >= 0; --i) {
//     reversedNum += num[i];
//   }
//   return Number(reversedNum)