function formFiller(name, mail, number, text = []) {
  const nameRegex = /<![A-Za-z]+!>/gm;
  const mailRegex = /<@[A-Za-z]+@>/gm;
  const numberRegex = /<\+[A-Za-z]+\+>/gm;

  let result = '';

  for (let i = 0; i < text.length; i++) {
    result += text[i] + '\n'
  }

  result = (replacer(nameRegex, result, name));
  result = (replacer(mailRegex, result, mail));
  result = (replacer(numberRegex, result, number));

  console.log(result);

  function replacer(regex, text, customData) {

    for (let i = 0; i < text.length; i++) {
      while (true) {

        let match = (regex.exec(text));

        if (match != null) {
          text = text.split(match).join(customData);
        } else {
          break;
        }

      }

    }
    return text;
  }

}

formFiller('Pesho',
  'pesho@softuni.bg',
  '90-60-90', ['Hello, <!username!>! <@DasEmail@> <!username!>',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!jggj!>. <!username!>, would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change <!username!> that? (Y/N)',
    'Hello, <!username!>! <@DasEmail@>'
  ]
);