function posOrNeg(arr) {

  let result = 'Positive';
  let negCount = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      return result;
    } else if (arr[i] < 0) {
      negCount++;
    }
  }

  if (negCount % 2 != 0) {
    result = 'Negative';
  }

  return result;
}
