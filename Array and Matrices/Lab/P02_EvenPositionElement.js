
//Solution 1 
function evenPositionElement(arr = []) {

  let result = "";
  for (let i = 0; i < arr.length; i += 2) {

    result += arr[i] + " ";

  }
  console.log(result.trim());
}

//Solution 2

function evenElement(arr=[]){
  return arr.filter((e,i)=>i%2==0).join(' ');
}


