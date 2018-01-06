function setValues(input) {
  
  let myArray = new Array(Number(input[0])).fill(0);
  
  for (let i = 1; i < input.length; i++) {
    
    let index = String(input[i]).split(' - ')[0];
    let value = String(input[i]).split(' - ')[1];
    myArray[index] = value;
  }
  
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }  
}
