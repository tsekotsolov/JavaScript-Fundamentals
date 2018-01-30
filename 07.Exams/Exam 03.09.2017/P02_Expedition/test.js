function checkEnd(point = [], primary) {

    let [pointRow, pointCol] = point;

    if (pointCol === 0 && (pointRow > 0 || pointRow < primary.length - 1)) {
        return 'Left';
    } else if (pointCol === primary[0].length-1 && (pointRow > 0 || pointRow <= primary.length - 1)) {
        return 'Right';
    } else if (pointRow === 0 && (pointCol > 0 || pointCol < primary[0].length - 1)) {
        return 'Top';
    } else if (pointRow === primary.length - 1 && (pointCol > 0 || pointCol < primary[0].length - 1)) {
        return 'Bottom';
    } else {
        return false;
    }

}

console.log(checkEnd([0, 2], [
    [1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 0]
]));