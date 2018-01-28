function cityMarkets(input = []) {

  let fullList = new Map();

  for (let i = 0; i < input.length; i++) {

    let tokens = input[i].split(' -> ');
    let town = tokens[0].trim();
    let product = tokens[1].trim();
    let totalPrice = tokens[2]
      .split(' : ')
      .reduce((a, b) => a * b);


    if (!fullList.has(town)) {
      fullList.set(town, new Map());
    }

    if (!fullList.get(town).has(product)) {
      fullList.get(town).set(product, 0);
    }

    let totalPriceSofar = fullList.get(town).get(product);
    fullList.get(town).set(product, totalPrice + totalPriceSofar);
  }


  for (const town of fullList) {
    console.log(`Town - ${town[0]}`);

    for (const product of (town[1])) {
      console.log(`$$$${product[0]} : ${product[1]}`);
    }
  }
}

cityMarkets([
  'Sofia -> Laptops HP -> 200 : 2000',
  'Sofia -> Raspberry -> 200000 : 1500',
  'Sofia -> Audi Q7 -> 200 : 100000',
  'Montana -> Portokals -> 200000 : 1',
  'Montana -> Qgodas -> 20000 : 0.2',
  'Montana -> Chereshas -> 1000 : 0.3',

]);