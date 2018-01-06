function addRemove(input) {

  let resultArray = new Array();

  for (let i = 0; i < input.length; i++) {

    let command = String(input[i]).split(" ")[0];

    if (command === 'add') {
      let value = String(input[i]).split(" ")[1];

      resultArray.push(value);

    } else {

      let index = String(input[i]).split(" ")[1];

      if (resultArray[index] != undefined) {
        resultArray.splice(index, 1);
      }

    }

  }

  for (const num of resultArray) {
    console.log(num);
  }

}

addRemove(["add 3", "add 5", "remove 2", "remove 0","add 7"]);