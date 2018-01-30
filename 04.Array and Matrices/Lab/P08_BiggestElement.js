function findBiggest(matrix) {
  let biggestNumber = Number.NEGATIVE_INFINITY;


  matrix.forEach(row =>
    row.forEach(e => {
      if (e > biggestNumber) {

        biggestNumber = e;

      }
    }));

 return biggestNumber;

}

