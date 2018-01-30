function wordsUppercase(input) {

  const regex = /\w+/g;

  let result = '';

  while ((m = regex.exec(input)) !== null) {

    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match) => {


      result += match.toUpperCase() + ',' + ' ';
    });
  }
  return result.substr(0, result.length - 2);

}