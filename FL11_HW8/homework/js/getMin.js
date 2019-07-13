function getMin() {
  let min = Infinity;
  for (let value of arguments) {
    if (value < min) {
      min = value;
    }
  }
  return min;
}

getMin(3,0,-3);
getMin(130,20,-300);
