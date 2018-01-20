function emploeeData(input = []) {

  const regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([A-Za-z0-9\- ]+$)/gm;

  for (let i = 0; i < input.length; i++) {
    while (true) {
      let match = regex.exec(input[i]);

      if (match === null) {
        break;
      }
      console.log(`Name: ${match[1]}`);
      console.log(`Position: ${match[3]}`);
      console.log(`Salary: ${match[2]}`);
    }
  }
}

