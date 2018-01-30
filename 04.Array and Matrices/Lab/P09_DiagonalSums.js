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

  console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

