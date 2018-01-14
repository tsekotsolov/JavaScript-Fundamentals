function rotate(arr = []) {

  let rotationCount = Number(arr.pop());
  for (let i = 0; i < rotationCount % 10; i++) {

    arr.unshift(arr[arr.length - 1]);
    arr.pop();

  }

  console.log(arr.join(' '));
}
