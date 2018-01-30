function triangleOfStars(count) {

  for (let i = 1; i <= count; i++) {

    drawStars(i);

  }

  for (let i = count - 1; i >= 1; i--) {

    drawStars(i);

  }

  function drawStars(count) {

    var stars = '*'.repeat(count);
    console.log(stars);;
  }

}

console.log(triangleOfStars(3));