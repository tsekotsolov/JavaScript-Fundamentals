
function concReversed(input = []) {

    let result = [];

    for (let i = 0; i < input.length; i++) {
      result.push(input[i].split("").reverse().join(""))
    }

    return result.reverse().join('');
}
