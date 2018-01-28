function extract(input=[]){

  let mySet = new Set();

  for (const line of input) {
    
    let words = line.split(/[\W]+/g)
    .filter(e=>e!='')
    .map(e=>e.toLowerCase());

    for (const word of words) {
      mySet.add(word)
    }
  }

  console.log([...mySet].join(', '));
}