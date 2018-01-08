function modifyAverage(number) {

  
  let avgSum = checkAverage(number);

  while (avgSum < 5) {
    number = number + "9";

    avgSum = checkAverage(number);
  }


  function checkAverage(number) {
    number = String(number).replace('.', '');
    let sumOfDigits = String(number).split('').map(Number).reduce((a, b) => a + b, 0);
    let avgSum = sumOfDigits / number.length;
    return avgSum;
  }

  console.log(number);
  
}

modifyAverage(25)