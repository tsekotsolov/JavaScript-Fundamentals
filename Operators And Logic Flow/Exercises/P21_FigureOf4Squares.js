function drawFigure(n) {

    let plusLine = "+" + '-'.repeat(n - 2) + "+" + '-'.repeat(n - 2) + "+\n";
    let pipeLine = "|" + ' '.repeat(n - 2) + "|" + ' '.repeat(n - 2) + "|\n";

    let result = plusLine;

    if (n % 2 != 0) {
        for (let i = 1; i <= n - 2; i++) {
            if (i != Math.ceil((n - 2) / 2)) {
                result += pipeLine
        
            } else {
                result += plusLine;
            }

        }
    } else {
        for (let i = 1; i <= n - 1 - 2; i++) {

            if (i != (n - 2) / 2) {
                result += pipeLine
        
            } else {
                result += plusLine;
            }
        }
    }

    if (n != 2) {
        result += plusLine;
    }

    return result
}