function tripLenght(input) {

  let point1 = {
    x: input[0],
    y: input[1],
  }

  let point2 = {
    x: input[2],
    y: input[3],
  }

  let point3 = {
    x: input[4],
    y: input[5],
  }

  let distance12 = findDistance(point1, point2);
  let distance23 = findDistance(point2, point3);
  let distance13 = findDistance(point1, point3);

  let minDistance = [distance12, distance23, distance13].sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);

  if ((distance12 <= distance13) && (distance13 => distance23)) {

    console.log('1->2->3: ' + minDistance);

  } else if ((distance12 <= distance23) && (distance13 < distance23)) {

    console.log('2->1->3: ' + minDistance);
    
  } else {

    console.log('1->3->2: ' + minDistance);
  }


  function findDistance(firstPoint, secondPoint) {

    let distance = Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);
    return distance;
  }


}
tripLenght([5, 1, 1, 1, 5, 4])