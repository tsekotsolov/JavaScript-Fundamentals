function qEquation(a, b, c) {

    let d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return "No";

    } else if (d === 0) {

        x = -b / (2 * a)
        return x;
    } else {

        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);

        return `${Math.min(x1,x2)}\n${Math.max(x1,x2)}`
    }
}