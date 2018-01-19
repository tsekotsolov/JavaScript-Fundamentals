function censor(text, censoredArr = []) {

  for (let i = 0; i < censoredArr.length; i++) {
   
    let bannedWord = censoredArr[i];
    let censorDash = '-'.repeat(bannedWord.length);

    text = text.split(bannedWord).join(censorDash);
  
  }
  console.log(text);
}
