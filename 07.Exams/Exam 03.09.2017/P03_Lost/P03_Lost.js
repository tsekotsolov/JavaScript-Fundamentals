function lost(keyword, text) {

  keyword = `${keyword}(.+?)${keyword}`
  let regexMessage = new RegExp(keyword, "gmi");
  let message = extractMessage(regexMessage, text);

  const coordinatesPattern = /(north|east)\D*([0-9]{2})[^,]*,\D*([0-9]{6})/gim;

  let eastCoordinates = '';
  let northCoordinates = '';

  while (match = coordinatesPattern.exec(text)) {

    if ((match[1].toLowerCase()) === 'east') {
      eastCoordinates = `${match[2]}.${match[3]} E`;
    } else {
      northCoordinates = `${match[2]}.${match[3]} N`;
    }
  }

  console.log(northCoordinates);
  console.log(eastCoordinates);
  console.log(`Message: ${message}`);

  function extractMessage(regex, text) {
    let result = '';
    while (match = regex.exec(text)) {
      result += (match[1]);
    }
    return result;
  }
}
lost('4ds', 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')


lost('<>', 'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k<>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b')