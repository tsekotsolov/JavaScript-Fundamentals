function triangleOfStars(count) {

  for (let i = 1; i <= count; i++) {

    drawStars(count);

  }

  function drawStars() {

    var stars = '*'+' *'.repeat(count-1);
    console.log(stars);;
  }

}

