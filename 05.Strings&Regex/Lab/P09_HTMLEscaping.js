function escape(input = []) {

  let result = '<ul>\n'

  for (let i = 0; i < input.length; i++) {

    result += ` <li>${htmlEscape(String(input[i]))}</li>\n`

  }

  result += '</ul>'
  console.log(result);

  function htmlEscape(data) {
    return data.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

}

escape(['<b>unescaped text</b>', 'normal text']);