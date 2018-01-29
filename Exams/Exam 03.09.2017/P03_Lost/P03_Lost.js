 
let text = 'o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsT,<>er23,lfwe 987324tlblu6b'

 let keyword = '<>';

 let myKey = `${keyword}(.+?)${keyword}`
 
 let regex = new RegExp(myKey, "gmi");

 while (match = regex.exec(text)) {
    console.log(match[1]);
  }
