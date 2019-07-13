function isInteger(val) {
  if (val === parseInt(val, 10)) {
    return true;
  } else {
    return false;
  }
}

isInteger(5);
isInteger(5.1);
