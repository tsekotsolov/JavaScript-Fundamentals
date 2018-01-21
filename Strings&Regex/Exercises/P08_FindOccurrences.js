function findOcc(text = new String(), word = new String()) {

  word = '\\b' + word + '\\b'
  let result = [];
  let regex = new RegExp(word, "gmi");;

  while (match = regex.exec(text)) {
    result.push(match);
  }
  console.log(result.length);

}

findOcc('The waterfall was so high, that the child couldn’t see its peak.', 'the');


findOcc('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');