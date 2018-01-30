function rounding(arr) {

let [digit, precision] = arr;

    if (precision > 15) {
        precision = 15;
    }

    let result = Number(digit).toFixed(precision);

    return Number(result);
}
