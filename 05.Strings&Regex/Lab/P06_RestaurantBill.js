function bill(input = []) {
  let totalPrice = 0;
  let productArr = [];


  for (let i = 0; i < input.length; i++) {
    if (i % 2 != 0) {
      totalPrice+=Number((input[i]));
    }
    else{
     productArr.push(input[i]);
    }
  }


console.log(`You purchased ${productArr.join(', ')} for a total sum of ${totalPrice}`); 
}
bill(['Cola', '1.35', 'Pancakes', '2.88']);