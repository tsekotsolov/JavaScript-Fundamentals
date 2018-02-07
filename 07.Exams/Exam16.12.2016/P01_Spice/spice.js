function spice(input = []) {

  let yieldPerDay = Number(input[0]);
  let workingDays = 0;
  let spiceMined = 0;

  while (yieldPerDay >= 100) {

    spiceMined += yieldPerDay;
    yieldPerDay -= 10;
    workingDays++;
    if (spiceMined >= 26) {
      spiceMined -= 26;
    }
  }

  if (spiceMined >= 26) {
    spiceMined -= 26;
  }
  console.log(workingDays);
  console.log(spiceMined);
}

spice(['111']);
spice(['450']);
spice(['200']);
