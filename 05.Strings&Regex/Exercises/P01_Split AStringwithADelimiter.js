function split(text = new String(), delimiter = new String()) {

  let result = text.split(delimiter);

  console.log(result.join('\n'));


}

split('One-Two-Three-Four-Five', '-');