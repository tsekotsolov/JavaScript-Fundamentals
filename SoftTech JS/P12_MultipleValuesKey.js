function keyValue(input) {

  let resultDict = new Array();

  for (let i = 0; i < input.length - 1; i++) {

    let [key, value] = [String(input[i]).split(" ")[0], String(input[i]).split(" ")[1]];


    if (!(key in resultDict)) {
      resultDict[key] = [];
    }

    resultDict[key].push(value);

  }

  let controlKey = String(input[input.length - 1]);

  if (controlKey in resultDict) {

    for (const value of resultDict[controlKey]) {
      console.log(value);
    }

  } else {

    console.log("None");
  }

}