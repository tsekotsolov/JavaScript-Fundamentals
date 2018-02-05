function election (input=[]){

  let resultsByGalaxy = new Map();

 for (const line of input) {
   
  if (!resultsByGalaxy.has(line.system)) {
    resultsByGalaxy.set(line.system,new Map())
  }
 }



console.log(resultsByGalaxy);


}

election([  
{ system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
{ system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
{ system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
{ system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
{ system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
{ system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } 
])