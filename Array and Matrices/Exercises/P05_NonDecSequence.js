function nonDecSeq(input = []) {

  let result = [input[0]];

  for (let i = 1; i < input.length; i++) {

    if (input[i] >= result[result.length - 1]) {
      result.push(input[i]);
    }
  }

  console.log(result.join('\n'));
}


function ndc(arr) {
  
  let result = arr.filter((e, i) => e >= Math.max(...arr.slice(0, i + 1)));

  console.log(result.join('\n'));
}
