function locator(input) {

  let result = '';
  for (let i = 0; i < input.length; i += 2) {

    let point = {
      x: input[i],
      y: input[i + 1],
    }

    result += checkPosition(point) + '\n';

  }
  console.log(result);

  function checkPosition(point) {
    let location = '';
    if (point.x >= 1 && point.x <= 3 && point.y >= 1 && point.y <= 3) {
      location = 'Tuvalu';
    } else if (point.x >= 8 && point.x <= 9 && point.y >= 0 && point.y <= 1) {
      location = 'Tokelau';
    } else if (point.x >= 5 && point.x <= 7 && point.y >= 3 && point.y <= 6) {
      location = 'Samoa';
    } else if (point.x >= 0 && point.x <= 2 && point.y >= 6 && point.y <= 8) {
      location = 'Tonga';
    } else if (point.x >= 4 && point.x <= 9 && point.y >= 7 && point.y <= 8) {
      location = 'Cook';
    } else {
      location = 'On the bottom of the ocean';
    }
    return location;
  }

}
