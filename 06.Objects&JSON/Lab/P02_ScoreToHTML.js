function score(input = '') {

  let myJSON = JSON.parse(input)

  let result = '<table>\n';
  result += ' <tr><th>name</th><th>score</th></tr>\n';

  for (let i = 0; i < myJSON.length; i++) {
    result += ` <tr><td>${htmlEscape(myJSON[i].name)}</td><td>${myJSON[i].score}</td></tr>\n`
  }

  result += '</table>'

  function htmlEscape(data) {
    return data.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  console.log(result);
}

score('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');