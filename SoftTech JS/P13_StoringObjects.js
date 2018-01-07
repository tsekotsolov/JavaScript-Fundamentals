function storeObject(input) {

  for (let i = 0; i < input.length; i++) {

    let object = {
      Name: input[i].split(" -> ")[0],
      Age: input[i].split(" -> ")[1],
      Grade: input[i].split(" -> ")[2],
    };

    console.log(`Name: ${object.Name}\nAge: ${object.Age}\nGrade: ${object.Grade} `);
  }

}
