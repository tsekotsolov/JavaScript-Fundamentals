function build(input = []){

  input = input.map(e=>Number(e));
  let concrete=[];

  while (true) {

    let dailyUsedConcrete=0;
    for (let i = 0; i < input.length; i++) {
      
      if (input[i]<30) {
        input[i]++;
        dailyUsedConcrete+=195;
      }
    }

    if (dailyUsedConcrete===0) {
      break;
    }
    concrete.push(dailyUsedConcrete);
    
  }

console.log(concrete.join(', '));

console.log(`${(concrete.reduce((a,b)=>a+b))*1900} pesos`);

}

//build(["21", "25", "28"]);

build(["17"]);

//build([17, 22, 17, 19, 17])
