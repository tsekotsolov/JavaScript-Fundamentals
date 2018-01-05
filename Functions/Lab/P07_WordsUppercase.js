function wordsUppercase(input) {

  const regex = /\w+/g;
  const str = input;
  let result = '';

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match) => {
      

      result += match.toUpperCase()+ ','+' ';
    });
  }

  return result.substr(0, result.length-2);

}

console.log(wordsUppercase('k3 4jkhjk'));    
