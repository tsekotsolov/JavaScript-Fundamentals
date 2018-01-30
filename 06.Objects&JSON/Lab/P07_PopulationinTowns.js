function population(input = []) {

    let listOfTowns = {};

    for (let i = 0; i < input.length; i++) {

        let town = input[i].split(' <-> ')[0];
        let population = Number(input[i].split('<->')[1]);

        if (!listOfTowns.hasOwnProperty(town)) {
            listOfTowns[town] = 0;
        }

        listOfTowns[town] += population;

    }

    for (var key in listOfTowns) {
        if (listOfTowns.hasOwnProperty(key)) {
            console.log(`${key}` + " : " + listOfTowns[key]);
        }
    }
}



population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',

]);