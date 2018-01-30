function agg(input = []) {

  const regex = /\|\s+|\s+\|/g;

  let cities = [];
  let sum = 0;

  for (let i = 0; i < input.length; i++) {

    let currentCity = input[i].split(regex).filter(e => e != '');
    cities.push(currentCity[0]);
    sum +=Number(currentCity[1]);
  }

console.log(cities.join(', '));
console.log(sum);

}
