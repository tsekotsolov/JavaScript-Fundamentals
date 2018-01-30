function binaryToDecimal(binary) {

    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {

        decimal += binary[i] * 2 ** (binary.length - i - 1);
    }

    return decimal;

}