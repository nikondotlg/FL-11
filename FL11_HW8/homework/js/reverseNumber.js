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

