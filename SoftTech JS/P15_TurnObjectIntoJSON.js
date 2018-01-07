function storeObject(input) {

  
    let object = {
      name: input[0].split(" -> ")[1],
      surname: input[1].split(" -> ")[1],
      age: Number(input[2].split(" -> ")[1]),
      grade: Number(input[3].split(" -> ")[1]),
      date: input[4].split(" -> ")[1],
      town: input[5].split(" -> ")[1],
    };

    let result = JSON.stringify(object);

    console.log(result);
  

}
