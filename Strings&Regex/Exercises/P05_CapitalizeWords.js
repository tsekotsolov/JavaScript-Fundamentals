function capitalizeWords(text) {

  console.log(text
    .toLowerCase()
    .split(' ')
    .map(e => e.charAt(0).toUpperCase() + e.substring(1))
    .join(' '));

}

capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!')