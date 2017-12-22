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

let result = findRequiredBoxes(15,6);
console.log(result);


//3. Leap Year

function leapYearCheck(year) {

    let firstCondition = false;
    let secondCondition = false;


    if (year % 4 === 0) {
        firstCondition = true;

        if (year % 100 === 0) {

            if (year % 400 === 0) {
                secondCondition = true;
            }
        } else {
            secondCondition = true;
        }

    }

    if (firstCondition && secondCondition) {
        console.log('yes');
    } else {
        console.log('no');
    }

}

// 4.	Circle Area