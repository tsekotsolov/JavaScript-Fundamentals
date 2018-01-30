function match(input) {
  const regex = /\w+/g;

  let result = [];

  let regexSuccess = '';
  let currentString = '';
  while (regexSuccess != null) {

    let regexSuccess = (regex.exec(input));

    if (regexSuccess === null) {
      break;
    }
    currentString += regexSuccess + '|';
  }
  result.push(currentString)

  result = result.join(', ')

  
  console.log(result.substring(0,result.length-1));
}


match('A Regular Expression needs to have the global flag in order to match all occurrences in the text')