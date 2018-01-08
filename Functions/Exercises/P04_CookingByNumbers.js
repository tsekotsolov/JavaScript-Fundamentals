function cookingByNumbers(input) {

  let number = input[0];
  let chop = n => n / 2;
  let dice = n => Math.sqrt(n);
  let spice = n => n + 1;
  let bake = n => n * 3;
  let fillet = n => n * 0.8

  for (let i = 1; i < input.length; i++) {

    let command = input[i];

    switch (command) {
      case 'chop':
        number = chop(number);
        break;
      case 'dice':
        number = dice(number);
        break;
      case 'spice':
        number = spice(number);
        break;
      case 'bake':
        number = bake(number);
        break;
      case 'fillet':
        number = fillet(number);
        break;
    }
    console.log(number);
  }

}