function capture(input = []) {
  const regex = /\d+/gm;
  let result = [];

  while (true) {
    let match = regex.exec(input);

    if (match !== null) {
      result.push(match[0]);
    } else {
      break;
    }

  }
  console.log(result.join(' '));
}

