function userNames(input = []) {

    let basket = [];

    for (let i = 0; i < input.length; i++) {

        if (!basket.includes(input[i])) {
            basket.push(input[i])
        }

    }
    basket = (basket.sort((x, y) => {

            if (x.length === y.length) {

                if (x < y) {
                    return -1;
                } else if (x > y) {
                    return 1
                }
                return 0;
            }

            return x.length < y.length ? -1 : 1
        }

    ));


    console.log(basket.join('\n'));
}

userNames(
    [
        `Ashton`,
        `Kutcher`,
        `Ariel`,
        `Lilly`,
        `Keyden`,
        `Aizen`,
        `Billy`,
        `Braston`,
    ]
)