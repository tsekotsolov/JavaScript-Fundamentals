function jan(input = []) {

  let numbers = [];

  for (const piece of input) {
    if (!isNaN(piece)) {
      numbers.push(piece);
    } else {

      if (numbers.length > 1) {

        let secondNumber = numbers.pop();
        let firstNumber = numbers.pop();

        switch (piece) {
          case '+':
            numbers.push(firstNumber + secondNumber);
            break;
          case '-':
            numbers.push(firstNumber - secondNumber);
            break;
          case '*':
            numbers.push(firstNumber * secondNumber);
            break;
          case '/':
            numbers.push(firstNumber / secondNumber);
            break;
          default:
            break;
        }
      } else {
        console.log('Error: not enough operands!');
        return;
      }
    }
  }

  if (numbers.length > 1) {
    console.log('Error: too many operands!');
    return;
  }
  console.log(numbers.join(''));

}

jan([3, 4, '+']);
jan([5, 3, 4, '*', '-']);
jan([7, 33, 8, '-']);
jan([15, '/']);
jan([31, 2, '+', 11, '/']);
jan([-1, 1, '+', 101, '*', 18, '+', 3, '/']);