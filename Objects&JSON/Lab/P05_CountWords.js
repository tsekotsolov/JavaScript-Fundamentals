function countWords(input = []) {
    const regex = /\W/gm;

    let result = {};

    input = input[0].split(regex).filter(e => e != '');

for (let i = 0; i < input.length; i++) {

    if (!result.hasOwnProperty(input[i])) {
        result[input[i]] = 0;
    }

    result[input[i]]++

}

console.log(JSON.stringify(result));

}

countWords([`Far too slow, you\'re far too slow.`]);

countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);