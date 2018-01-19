function countOccurrences(target,text){

 
let counter = 0;
let searchAtPosition = 0;

 while (true) {
   
  let existsAtPosition = (String(text).indexOf(target,searchAtPosition));

  if (existsAtPosition!=-1) {
    searchAtPosition=existsAtPosition+1;
    counter++;
  }
  else{
    break;
  }

}
console.log(counter);
}
