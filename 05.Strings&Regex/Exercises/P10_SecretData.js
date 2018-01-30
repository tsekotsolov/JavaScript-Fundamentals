function secretData(input = []) {

  let nameRegex = /\*[A-Z][A-Za-z]*(?=\s|\t|$)/g
  let numberRegex = /\+[0-9-]{10}(?=\s|\t|$)/g
  let IdRegex = /![a-zA-Z0-9]+(?=\s|\t|$)/g
  let baseRegex = /_[0-9A-Za-z]+(?=\s|$)/g


  for (const row of input) {
    console.log(
      row.replace(nameRegex, x => '|'.repeat(x.length))
      .replace(numberRegex, x => '|'.repeat(x.length))
      .replace(baseRegex, x => '|'.repeat(x.length))
      .replace(IdRegex, x => '|'.repeat(x.length))
    )
  }

}




secretData([
  'Agent *Ivankov was in *Ivankov the room when it all happened.',
  'The person in the room was heavily armed.',
  'Agent *Ivankov had to act quick in order.',
  'He picked up his phone and called some unknown number.',
  'I think it was +555-49-796',
  'I can\'t really remember...',
  'He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21',
  'Then after that he disappeared from my sight.',
  'As if he vanished in the shadows.',
  'A moment, shorter than a second, later, I saw the person flying off the top floor.',
  'I really don\'t know what happened there.',
  'This is all I saw, that night.',
  'I cannot explain it myself...'
]);