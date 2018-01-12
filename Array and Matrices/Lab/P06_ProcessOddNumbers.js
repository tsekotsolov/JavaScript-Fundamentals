function processOdd(arr=[]){

  return arr.filter((e,i)=>i%2!=0).map(e=>e*2).reverse().join(' ');

}

