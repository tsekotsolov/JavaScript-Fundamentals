function spy(input = []) {

  let specialKey = input[0];

  let pattern = `(?:^|\\s)(${specialKey}\\s+)([!%$#A-Z]{8,})(?:[\\s.,]|$)`;
  let regex = new RegExp(pattern, 'gi');

  for (let i = 1; i < input.length; i++) {

    let currentString = input[i];
    while (match = regex.exec(currentString)) {
      let foundWord = match[2];

      if (foundWord !== foundWord.toUpperCase()) {
        continue;
      }

    
      input[i] = input[i].replace(foundWord,decode(foundWord));

      
    }
    console.log(input[i]);
  }

  function decode(word) {

    let result = '';
    for (let char of word) {
      if (char === "!") {
        result += "1"
      }
      else if (char === "%") {
        result += "2"
      }
  
      else if (char === "#") {
        result += "3"
      }
      else if (char === "$") {
        result += "4"
      }
      else if(char===char.toUpperCase()){
         result +=char.toLowerCase();
      }
      else {
        result += char;
      }
    }
    return(result);
  }
}

    // spy([ 'specialKey',
    // 'In this text the specialKey HELLOWORLD! is correct, but specialKey HELLOWORLD!',
    // 'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    // 'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]);

    // spy([ 'enCode',
    // 'Some messages are just not encoded what can you do?',
    // 'RE - ENCODE THEMNOW! - he said. RE - ENCODE THEMNOW! - he said.',
    // 'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.' ]
    // )

    spy(
  [
'tricky',
`And now the tricky tests`,
`Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%`,
`Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -`,
`Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE`,
`Be very carefull now trICkY plainwrong, trICkY PLAINWRONG`,
`next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS`,
`It's tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,`,
`now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.`,
`DON'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.`,
`Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow`,
  ]
    )