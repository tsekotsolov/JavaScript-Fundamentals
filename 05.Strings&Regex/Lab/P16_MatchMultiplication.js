function matchMultiplication(input) {
  const regex = /(-*\d+)\s*\*\s*(\-*\d+\.*\d*)/gm;

  // let result = String(input).match(regex);

  while (true) {

    let test = regex.exec(input);
    if (test !== null) {

      let firstNumber = Number(test[1]);
      let secondNumber = Number(test[2]);
      let product = firstNumber * secondNumber;

     input = (String(input).replace(test[0],product)); 
     
    } else {
      break;
    }

  }

console.log(input);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');