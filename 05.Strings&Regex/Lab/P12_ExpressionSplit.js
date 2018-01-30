function split(input) {
  const regex = /[\s();,\.]/gm;

  let result = input.split(regex);

  console.log(result.filter(e => e != '').join('\n'));

}
