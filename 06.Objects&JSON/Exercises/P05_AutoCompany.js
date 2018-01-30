function autoCompany(input = []) {

  let garage = new Map();

  for (let i = 0; i < input.length; i++) {

    let [brand, model, qty] = input[i].split(' | ');

    if (!garage.get(brand)) {
      garage.set(brand, new Map());
    }

    if (!garage.get(brand).get(model)) {
      garage.get(brand).set(model, 0);
    }

    let qtySoFar = garage.get(brand).get(model);

    garage.get(brand).set(model, Number(qtySoFar) + Number(qty));

  }

  for (const brand of garage) {
    console.log(brand[0]);

    for (const model of brand[1]) {
      console.log(`###${model[0]} -> ${model[1]}`);
    }
  }

}

autoCompany(
  [
    `Audi | Q7 | 1000`,
    `Audi | Q7 | 1500`,
    `Audi | Q6 | 100`,
    `BMW | X5 | 1000`,
    `BMW | X6 | 100`,
    `Citroen | C4 | 123`,
    `Volga | GAZ-24 | 1000000`,
    `Lada | Niva | 1000000`,
    `Lada | Jigula | 1000000`,
    `Citroen | C4 | 22`,
    `Citroen | C5 | 10`,

  ]);