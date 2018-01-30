function extract(text) {

  let startIndex = text.indexOf('(');

  let result = [];


  while (startIndex != -1) {


    let endIndex = text.indexOf(')', startIndex);

    if (endIndex != -1) {
      result.push(text.substring(startIndex + 1, endIndex));
      startIndex = text.indexOf('(', endIndex);
    } else {
      break;
    }

  }

  console.log(result.join(', '));
}

extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');