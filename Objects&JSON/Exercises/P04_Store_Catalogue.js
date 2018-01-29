function storeCatalog(input = []) {

    let container = {};

    for (let i = 0; i < input.length; i++) {

        let [product, price] = input[i].split(' : ');

        container[product] = Number(price);
    }

    container = sortObject(container);


    let letterArray = [];
    for (var key in container) {
        if (!letterArray.includes(key[0])) {
            letterArray.push(key[0]);
        }     
    }
   
    for (let i = 0; i < letterArray.length; i++) {

        console.log(letterArray[i]);

        for (var key in container) {

            if (letterArray[i] === key[0]) {
                console.log(`  ${key}` + ": " + container[key]);
            }
        }

    }

    function sortObject(o) {
        var sorted = {},
            key, a = [];

        for (key in o) {
            if (o.hasOwnProperty(key)) {
                a.push(key);
            }
        }

        a.sort();

        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = o[a[key]];
        }
        return sorted;
    }
}

// storeCatalog(
//     [
//         'Appricot : 20.4',
//         'Fridge : 1500',
//         'TV : 1499',
//         'Deodorant : 10',
//         'Boiler : 300',
//         'Apple : 1.25',
//         'Anti-Bug Spray : 15',
//         'T-Shirt : 10',

//     ]);

storeCatalog(
    [
        'Banana : 2',
        `Rubic's Cube : 5`,
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10',

    ])