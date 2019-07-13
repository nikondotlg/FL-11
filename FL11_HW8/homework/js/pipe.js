function addOne(x) {
  return x + 1;
}

function pipe(number, ...funcs) {
  let res = number;
  for (let i = 0; i < funcs.length; i++) {
    res = funcs[i](res);
  }
  return res;
}

pipe(1, addOne);
pipe(1, addOne, addOne);