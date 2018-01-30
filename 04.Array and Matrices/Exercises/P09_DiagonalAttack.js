function dAttack(input = []) {

  let matrix = [];

  for (let i = 0; i < input.length; i++) {

    matrix.push((input[i].split(' ').map(Number)));

  }

  if (dSums(matrix) != false) {
    let diagonalSum = dSums(matrix)

    for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix[i].length; j++) {

        if (i != j && j != matrix[i].length - 1 - i) {

          matrix[i][j] = diagonalSum;

        }
      }
    }

  }
  printMatrix(matrix);

  function dSums(matrix) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix[i].length; j++) {

        if (i === j) {
          mainDiagonalSum += matrix[i][j];

        }
        if (j === matrix[i].length - 1 - i) {
          secondaryDiagonalSum += matrix[i][j]
        }

      }

    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
      return mainDiagonalSum;
    } else {
      return false;
    }
  }

  function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(' ')));
  }

}

dAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1'
]);

dAttack(['1 1 1',
  '1 1 1',
  '1 1 0'
])