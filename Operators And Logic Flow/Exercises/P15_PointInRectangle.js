function pointInRect(arr) {

    let [x, y, xMin, xMax, yMin, yMax] = arr;

    let xCondition = x <= xMax && x >= xMin;

    let yCondition = y <= yMax && y >= yMin;

    if (xCondition&&yCondition) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

pointInRect([8,-1,2,12,-3,3])

pointInRect([12.5,-1,2,12,-3,3])