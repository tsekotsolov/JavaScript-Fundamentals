 
 //Solution 1
 function lastKNumbers(n, k) {

   let arr = [1];

   for (let i = 0; i < n - 1; i++) {
     let sum = arr.slice(-k).reduce((a, b) => a + b);
     arr.push(sum);
   }

   console.log(arr);

 }

 //Solution 2
 function lastSumK(n, k) {

  let arr = [1];

  for (let i = 1; i < n ; i++) {
    
    let start = Math.max(0,i-k);
    let end = i;

    let sum = arr.slice(start,end).reduce((a, b) => a + b);
    arr.push(sum);
  }

  console.log(arr);

}
