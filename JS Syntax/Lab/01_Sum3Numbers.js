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


function blink() {
  var div = document.getElementById('greeting');

  if (div.style.visibility === 'hidden') {
    div.style.visibility = 'visible';
  } else {
    div.style.visibility = 'hidden'
  }
}
