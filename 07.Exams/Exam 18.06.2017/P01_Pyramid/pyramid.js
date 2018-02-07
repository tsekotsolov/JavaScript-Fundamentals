function pyramid(base, increment) {

  let [stone, marble, lapis, gold] = [0, 0, 0, 0];

  let steps = Math.ceil(base / 2);

  for (let i = 1; i <= steps - 1; i++) {

    if (i % 5 != 0) {
      currentStone = (base - 2) ** 2;
      stone += currentStone*increment;
      marble += (base ** 2 - currentStone)*increment;
    } else {
      currentStone = (base - 2) ** 2;
      stone += currentStone*increment;
      lapis += (base ** 2 - currentStone)*increment;
    }
    base -= 2;
  }

  gold=base**2*increment;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}

pyramid(11, 1);
pyramid(11, 0.75);
pyramid(12, 1);
pyramid(23, 0.5);