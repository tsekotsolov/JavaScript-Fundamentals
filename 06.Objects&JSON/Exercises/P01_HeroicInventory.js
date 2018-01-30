function heroicInventory(input = []) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');

        let itemList = [];

        if (items!=undefined) {
            itemList = items.split(', ');
        }

        let heroBasket = {
            name: name,
            level: Number(level),
            items: itemList
        }
        result.push(heroBasket);
    }
    console.log(JSON.stringify(result));
}

heroicInventory(
    [
        'Isacc / 25 / ',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara',
    ]);