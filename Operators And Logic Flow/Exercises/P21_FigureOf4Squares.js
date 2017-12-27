function drawFigure(n) {

    let line = "+" + '-'.repeat(n - 2) + "+" + '-'.repeat(n - 2) + "+\n";
    let midline = "|" + ' '.repeat(n - 2) + "|" + ' '.repeat(n - 2) + "|\n";

    let result = line;

    if (n % 2 != 0) {
        for (let i = 1; i <= n - 2; i++) {
            if (i != Math.ceil((n - 2) / 2)) {
                result += midline
            } else {
                result += line;
            }

        }
    } else {
        for (let i = 1; i <= n - 1 - 2; i++) {

            if (i != (n - 2) / 2) {
                result += midline
            } else {
                result += line;
            }
        }
    }

    if (n != 2) {
        result += line;
    }

    return result
}