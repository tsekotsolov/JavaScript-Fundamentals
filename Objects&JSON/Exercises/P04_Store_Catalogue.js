function storeCatalog(input = []) {

    let container = {};

    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');

        container[product] = Number(price);
    }

    container = sortObject(container);

    for (var key in container) {

        
        console.log(` ${key}` + " : " + container[key]);

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

storeCatalog(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10',

    ]);