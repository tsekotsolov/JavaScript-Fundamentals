function xml (input){
  const regexMessage =  /^<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>((.|\n)+)<\/message>$/gm;
  let validMessage = regexMessage.exec(input);
  const toAttrRegex = /\bto="([0-9A-Za-z.\s]+)"/gm;
  const fromAttrRegex = /\bfrom="([0-9A-Za-z.\s]+)"/gm;
  
  
  let html='<article>\n';

  if (validMessage!=null) {
    let validTo = toAttrRegex.exec(validMessage[1]);
    let validFrom = fromAttrRegex.exec(validMessage[1]);
    if (validTo!=null&&validFrom!=null) {
      
      html+=`  <div>From: <span class="sender">${validFrom[1]}</span></div>\n`;
      html+=`  <div>To: <span class="recipient">${validTo[1]}</span></div>\n  <div>\n`;

      let paragraphs = validMessage[2].split('\n');
      for (let i = 0; i < paragraphs.length; i++) {
        html+=`    <p>${paragraphs[i]}</p>\n`;
      }
       html+='  </div>\n</article>'
    }
    else{
      console.log('Missing attributes');
      return;
    }
  } 
  
  else{
    console.log('Invalid message format');
    return;
  }

  console.log(html);
}


//xml('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');

//xml('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');

xml('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\
Let\'s go out for a beer</message>')

//xml('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>');

// xml('<message from="Alice" timestamp="1497254112">Same old, same old</message>');