function format(input = []) {
  let text = input[0];
  const regexFirst = /[.,!?:;]\s*/g;
  const regexSecond = /\s+[.,!?:;]/gm;
  const regexThird = /\.\s*.\s*.\s*\!/gm;
  const regexFourth = /(\.\s+)(\d+)/gm;
  const regexFifth = /(")(\s*.+?)(")/gm;
  
  
  text = text.replace(regexFirst, x => x.trim() + ' ')
    .replace(regexSecond, x => x.trim())
    .replace(regexThird,x=>x.trim())
    .replace(regexFourth,(x,dotGroup,digitGroup)=>dotGroup.trim() + digitGroup)
    .replace(regexFifth,(x,group1,textGroup,group2)=>group1+textGroup.trim()+group2)

  console.log(text);

}

format(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);
format(['Make,sure to give:proper spacing where is needed... !']);