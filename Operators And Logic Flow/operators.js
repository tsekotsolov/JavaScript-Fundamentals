'use strict';
//1.	Multiply Numbers

function multiply(x, y) {
    return x * y;
}

//2.	Boxes and Bottles

function findRequiredBoxes(numberOfBottles, boxCapacity) {

    let boxesNeeded = numberOfBottles / boxCapacity;

    return Math.ceil(boxesNeeded)
}