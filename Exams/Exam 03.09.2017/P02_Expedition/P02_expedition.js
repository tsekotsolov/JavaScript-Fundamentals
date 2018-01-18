function expedition(primary, secondary = [], cordinates, startingPoint) {

  // let startRow = 1;
  // let startCol = 1;


  for (let i = 0; i < cordinates.length; i++) {

    let [startRow, startCol] = cordinates[i];

    primary = overlay(startRow, startCol, primary, secondary)

  }

  function overlay(startRow, startCol, primary, secondary) {
    let countRow = 0;
    let countCol = 0;

    for (let i = startRow; i < startRow+secondary.length; i++) {

      for (let j = startCol; j < startCol + secondary[0].length; j++) {

        if (secondary[countRow][countCol] === 1) {
          if (primary[i][j] === 0) {
            primary[i][j] = 1
          } else {
            primary[i][j] = 0
          }
        }
        countCol++;
      }
      countCol = 0;
      countRow++;
    }
    return (primary);

  }

  console.log(primary);
  console.log(typeof( primary[100][100]));
}


expedition([[1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 0, 0]],
  [[0, 1, 1],
  [0, 1, 0],
  [1, 1, 0]],
  [[1, 1],
  [2, 3],
  ],
  [0, 2])