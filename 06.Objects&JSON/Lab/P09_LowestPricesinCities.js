function lowestPrice(input = []) {

  let productsList = new Map();

  for (const line of input) {

    let [town, product, price] = line.split(' | ')
      .filter(e => e != '');

    if (!productsList.has(product)) {
      productsList.set(product, new Map());
    }

    productsList.get(product).set(town, Number(price));

  }

  for (const [key, value] of productsList) {

    let lowest = ([...value].reduce(function (a, b) {
      if (a[1] > b[1]) {
        return b;
      } 
      return a;
    }));
    console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
  }

}
lowestPrice([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 1',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 1',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',

]);
