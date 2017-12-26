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

function calcCircleArea(radius) {

    let area = Math.PI * Math.pow(radius, 2);

    console.log(area);
    console.log(area.toFixed(2));
}

// 5. Triangle Area

function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;

    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c), 2);

    return area;
}

//  6. Cone

function calcCone(radius, height) {

    let volume = Math.pow(radius, 2) * height / 3 * Math.PI;

    let lateralSurface = Math.PI * radius * Math.sqrt(radius * radius + height * height, 2);

    let baseSurface = Math.PI * (radius * radius);

    let surfaceArea = lateralSurface + baseSurface;

    volume = `volume = ${volume.toFixed(4)}\n`;
    surfaceArea = `area = ${surfaceArea.toFixed(4)}`;

    return volume + surfaceArea;
}

//  7. Odd / Even

function oddOrEven(x) {

    if (x - Math.trunc(x) != 0) {
        console.log("invalid");
    } else if (x % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }

}

//8. Fruit or Vegetable

function fruitOrVeggie(word) {

    switch (word) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'lemon':
        case 'grapes':
        case 'peach':
        case 'cherry':
            console.log("fruit");
            break;

        case 'tomato':
        case 'cucumber':
        case 'kiwi':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log("vegetable");
            break;

        default:
            console.log("unknown");
            break;
    }
}


//  11. Binary Logarithm


function logarithm(x) {

    for (let index = 0; index < x.length; index++) {

        console.log(Math.log2(x[index]));
    }

}

//  12. Prime Number Checker

function primeChecker(x) {

    let isPrime = true;

    if (x > 1) {

        for (let index = 2; index <= Math.ceil(Math.sqrt(x)); index++) {

            if (x % index === 0 && x != index) {
                isPrime = false;
                break;
            }
        }

    } else {
        isPrime = false;
    }

    console.log(isPrime);

}