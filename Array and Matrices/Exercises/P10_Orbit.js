function orbit(input = []) {

  [width, height, x, y] = input;

  let matrix = (populateMatrix(width, height));

  
  matrix[x][y] = 1;

  let counter = 1;
  let currentRow = x;
  let currentCol = y;

  while (true) {
    let isFilled = false;
    
    let startRow = Math.max(0, currentRow - counter);
    let endRow = Math.min(matrix.length - 1, currentRow + counter);
    let startCol = Math.max(0, currentCol - counter);
    let endCol = Math.min(matrix[0].length - 1, currentCol + counter);

    for (let row = startRow; row <= endRow; row++) {

      for (let col = startCol; col <= endCol; col++) {
        if (matrix[row][col] === 0) {
          matrix[row][col] = counter+1;
          isFilled = true;
        }

      }
    }
    counter++;
    if (!isFilled) {
      break;
    }

  }

  matrix.forEach(row => console.log(row.join(' ')));

  
  function populateMatrix(m, n) {
    let result = []
    for (let i = 0; i < n; i++) {
      result.push(new Array(m).fill(0))
    }
    return result;
  }

}

orbit([3, 3, 2, 2]);