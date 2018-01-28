function JSONtoHTML(input = []) {

    let result = '<table>\n';

    for (let i = 0; i < input.length; i++) {

        let myObject = JSON.parse(input[i]);

        result +='  <tr>\n';
        result+=`       <td>${myObject.name}</td>\n`;
        result+=`       <td>${myObject.position}</td>\n`;
        result+=`       <td>${myObject.salary}</td>\n`;
        result +='  <tr>\n';

    }

    result += '</table>';
    console.log(result);
}

JSONtoHTML(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}',
    ]

)