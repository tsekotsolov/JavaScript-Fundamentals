function multiplyOrDivide(arr) {
  let n = arr[0];
  let x = arr[1];


  if (x > n || x === n) {
    return n * x
  } else {
    return n / x;
  }
}