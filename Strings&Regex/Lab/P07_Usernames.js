function usernames(input = []) {
  const regex = /.+(?=@)|@|(?<=@)\w{1}|(?<=\.)\w{1}/g;

  let result = [];

  for (let i = 0; i < input.length; i++) {

    let regexSuccess = '';
    let currentString = '';
    while (regexSuccess != null) {
      
      let regexSuccess = (regex.exec(input[i]));

      if (regexSuccess === null) {
        break;
      }
      currentString +=regexSuccess;
    }
    result.push(currentString.replace('@','.'))
  }

  console.log(result.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);