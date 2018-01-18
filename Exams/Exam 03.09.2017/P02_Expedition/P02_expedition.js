function expedition(primary, secondary = [], cordinates, startPoint) {


  for (let i = 0; i < cordinates.length; i++) {

    let [startRow, startCol] = cordinates[i];

    primary = overlay(startRow, startCol, primary, secondary)

  }
  countsteps = 0;

  let [row, col] = startPoint;

  while (true) {


  }

  function checkEnd(point = [], primary) {

    let [pointRow, pointCol] = point;

    if (pointCol === 0 && (pointRow > 0 || pointRow < primary.length - 1)) {
      return 'Left';
    } else if (pointCol === primary[0].length - 1 && (pointRow > 0 || pointRow <= primary.length - 1)) {
      return 'Right';
    } else if (pointRow === 0 && (pointCol > 0 || pointCol < primary[0].length - 1)) {
      return 'Top';
    } else if (pointRow === primary.length - 1 && (pointCol > 0 || pointCol < primary[0].length - 1)) {
      return 'Bottom';
    } else {
      return false;
    }

  }

  function overlay(startRow, startCol, primary, secondary) {
    let countRow = 0;
    let countCol = 0;

    let endRow = 0;

    if (startRow + secondary.length > primary.length) {
      endRow = primary.length;
    } else {
      endRow = startRow + secondary.length;
    }

    let endCol = 0;

    if (startCol + secondary[0].length > primary[0].length) {
      endCol = primary[0].length;

    } else {
      endCol = startCol + secondary[0].length;
    }

    for (let i = startRow; i < endRow; i++) {

      for (let j = startCol; j < endCol; j++) {

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

}


expedition([
  [1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 0, 0]
], [
  [0, 1, 1],
  [0, 1, 0],
  [1, 1, 0]
], [
  [0, 7],
], [0, 2])