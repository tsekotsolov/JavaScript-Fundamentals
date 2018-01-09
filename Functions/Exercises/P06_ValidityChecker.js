function validityChecker(input) {

  let isValid = false;

  let point1 = {
    x: input[0],
    y: input[1],
  };

  let point2 = {
    x: input[2],
    y: input[3],
  };
  let ponitZero = {
    x: 0,
    y: 0,
  };

  console.log(`{${point1.x}, ${point1.y}} to {${ponitZero.x}, ${ponitZero.y}} is ${checkDistance(point1,ponitZero)}`);

  console.log(`{${point2.x}, ${point2.y}} to {${ponitZero.x}, ${ponitZero.y}} is ${checkDistance(point2,ponitZero)}`);

  console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is ${checkDistance(point1, point2)}`);

  function checkDistance(firstPoint, secondPoint) {
    let isValid = 'invalid';

    let distance = Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);

    if (distance - Math.floor(distance) === 0) {
      isValid = 'valid';
    }
    return isValid;
  }
}
