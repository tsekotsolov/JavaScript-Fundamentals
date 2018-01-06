function keyValue(input) {

  let resultDict = new Array()

  for (let i = 0; i < input.length - 1; i++) {

    let [key, value] = [String(input[i]).split(" ")[0], String(input[i]).split(" ")[1]];

    resultDict[key] =value;

  }

  let controlKey = String(input[input.length - 1]);

  if (controlKey in resultDict) {

    console.log(resultDict[controlKey]);

  } else {

    console.log("None");
  }

console.log(resultDict);

}

