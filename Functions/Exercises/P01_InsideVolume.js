function volumeChecker(input) {

  for (let i = 0; i < input.length; i += 3) {

    let point = {
      x: input[i],
      y: input[i + 1],
      z: input[i + 2]
    }

    if (inVolume(point)) {
      console.log('inside');;
    } else {
      console.log('outside');
    }
  }

  function inVolume(point) {

    if (point.x >= 10 && point.x <= 50) {
      if (point.y >= 20 && point.y <= 80) {
        if (point.z >= 15 && point.z <= 50) {
          return true;
        }
      }
    }
    return false;
  }
}