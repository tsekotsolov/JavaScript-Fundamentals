// 1.	Sum 3 Numbers

function sumOfNumbers(a, b, c) {
  console.log(a + b + c);
}

//2.	Sum And VAT

function vatCalculator(x) {

  let sum = 0;

  x.forEach(element => {
    sum += element;
  });

  
  console.log("sum = ", sum);
  let vat = sum * 20 / 100;

  console.log("VAT = ", vat);

  console.log("total = ", sum + vat);

}

//3.	Letter Occurrences in String

function countStrings(text, letter) {

  var counter = 0;

  for (let index = 0; index < text.length; index++) {

    if (text[index] === letter) {
      counter++;
    }

  }

  console.log(counter);
}

//4.	Filter By Age

function ageFilter(a, b, c, d, e) {

  var boundry = a;
  var people = [{
      name: b,
      age: c
    },
    {
      name: d,
      age: e
    }
  ]

  var sorted = people.sort(function (x, y) {
    return y.age - x.age
  });

  for (let index = 0; index < sorted.length; index++) {

    if (sorted[index].age >= boundry) {
      console.log(sorted[index]);
    }

  }
}

//5.	String of Numbers 1…N

function stringOfNumbers(x) {

  let result = "1";

  for (let index = 2; index <= parseInt(x); index++) {

    result += index;
  }

  console.log(result);
}

//6.	Figure Area

function calcArea(w, h, W, H) {

  var firstRectArea = w * h;
  var secondRectArea = W * H;
  var commonRectArea = Math.min(w, W) * Math.min(h, H);

  return firstRectArea + secondRectArea - commonRectArea;

}

//7.	Next Day

function nextDay(year, month, day) {

  var today = new Date(year,month-1,day);
  var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

  var day = tomorrow.getDate();
  var month = tomorrow.getMonth();
  var year = tomorrow.getFullYear();

  console.log(`${year}-${month+1}-${day}`);
  
}

//8.	Distance between Points

function calcDistance(x1, y1, x2, y2) {

  var firstPoint = {
    x: x1,
    y: y1
  }

  var secondPoint = {
    x: x2,
    y: y2
  }

  var distance = Math.sqrt(Math.pow(Math.abs(firstPoint.x - secondPoint.x), 2) + Math.pow(Math.abs(firstPoint.y - secondPoint.y), 2))

  return (distance);
}

//9.  Blink 

function blink() {
  var div = document.getElementById('greeting');

  if (div.style.visibility === 'hidden') {
    div.style.visibility = 'visible';
  } else {
    div.style.visibility = 'hidden'
  }
}

