function cappyJuice(input = []) {

    let juiceBasket = new Map();

    let bottles = new Map();

    for (let i = 0; i < input.length; i++) {
        let [juiceName, qty] = input[i].split(' => ');

        qty = Number(qty);

        if (!juiceBasket.get(juiceName)) {
            juiceBasket.set(juiceName, 0)
        }
        let qtySoFar = juiceBasket.get(juiceName);

        juiceBasket.set(juiceName, (qtySoFar + qty));

        if (juiceBasket.get(juiceName) >= 1000) {

            let currentBottles = ((qtySoFar + qty) / 1000) | 0;

            juiceBasket.set(juiceName, (qtySoFar + qty) % 1000);

            if (!bottles.get(juiceName)) {
                bottles.set(juiceName, currentBottles)
            } else {

                let bottlesSoFar = bottles.get(juiceName);
                bottles.set(juiceName, bottlesSoFar + currentBottles);
            }
        }
    }

    for (const juice of bottles) {

        console.log(`${juice[0]} => ${juice[1]}`);
    }

}
cappyJuice(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789',
    ]);