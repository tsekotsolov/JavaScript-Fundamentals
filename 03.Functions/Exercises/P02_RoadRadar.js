function infraction(input) {

  let speed = input[0];
  let zone = input[1];
  let speedLimit = getSpeedLimit(zone);

  function getSpeedLimit(zone) {

    switch (zone) {
      case 'motorway':
        return 130;
      case 'interstate':
        return 90;
      case 'city':
        return 50;
      case 'residential':
        return 20;

    }

  }
  let overspeed = speed - speedLimit;

  if (overspeed <= 0) {
    return;
  } else {
    if (overspeed > 0 && overspeed <= 20) {
      console.log("speeding");
    } else if (overspeed > 20 && overspeed <= 40) {
      console.log("excessive speeding");
    } else {
      console.log("reckless driving");
    }
  }

}
