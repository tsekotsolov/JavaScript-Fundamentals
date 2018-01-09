function radiocrystal(input = []) {


  let finishedSize = input.shift();

  let cut = crystal => crystal / 4;
  let lap = crystal => crystal * 0.8;
  let grind = crystal => crystal - 20;
  let etch = crystal => crystal - 2;
  let xray = crystal => crystal + 1;
  let tansportAndWash = crystal => Math.floor(crystal);

  for (let i = 0; i < input.length; i++) {

    let crystal = input[i];
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xrayCounter = 0;

    console.log(`Processing chunk ${crystal} microns`);

    while (cut(crystal) >= finishedSize) {

      crystal = cut(crystal);
      cutCounter++;
    }
    if (cutCounter != 0) {
      console.log(`Cut x${cutCounter}`);
      crystal = tansportAndWash(crystal);
      console.log('Transporting and washing');

    }


    while (lap(crystal) >= finishedSize) {

      crystal = lap(crystal);
      lapCounter++;
    }

    if (lapCounter != 0) {
      console.log(`Lap x${lapCounter}`);
      crystal = tansportAndWash(crystal);
      console.log('Transporting and washing');
    }

    while (grind(crystal) >= finishedSize) {

      crystal = grind(crystal);
      grindCounter++;
    }

    if (grindCounter != 0) {
      console.log(`Gring x${grindCounter}`);
      crystal = tansportAndWash(crystal);
      console.log('Transporting and washing');
    }


    while (etch(crystal) >= finishedSize - 1) {

      crystal = etch(crystal);
      etchCounter++;
    }
    
    if (etchCounter!=0) {
      console.log(`Etch x${etchCounter}`);
      crystal = tansportAndWash(crystal);
      console.log('Transporting and washing');
    }

  
    if (finishedSize - crystal === 1) {
      crystal = xray(crystal);
      xrayCounter++;
      console.log(`X-ray x${xrayCounter}`);
    }

    console.log(`Finished crystal ${crystal} microns`);

  }

}

radiocrystal([1000, 4000,8100])