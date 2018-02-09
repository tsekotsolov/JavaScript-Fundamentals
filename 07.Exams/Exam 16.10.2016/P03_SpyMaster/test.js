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

  console.log(result);
}

decode('hi!hirAe!#$%*')