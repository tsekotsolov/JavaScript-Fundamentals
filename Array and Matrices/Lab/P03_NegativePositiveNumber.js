function negativePoditiveNumbers(arr = []) {

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      resultArr.unshift(arr[i])
    } else {
      resultArr.push(arr[i])
    }
  }
  
  console.log(resultArr);
}

negativePoditiveNumbers([3, -2, 0, -1]);