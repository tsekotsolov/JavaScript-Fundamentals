function countWords(input = []) {
    const regex = /\W/gm;

    let result = {};

    input = input[0].split(regex).filter(e => e != '').map(e => e.toLowerCase());

    for (let i = 0; i < input.length; i++) {

        if (!result.hasOwnProperty(input[i])) {
            result[input[i]] = 0;
        }

        result[input[i]]++

    }

    result = sortObject(result);

    Object.entries(result).forEach(
        ([key, value]) => console.log(`'${key}' ->`, `${value} times`)
    );

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
countWords([`Far too slow, you\'re far too slow.`]);

countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);