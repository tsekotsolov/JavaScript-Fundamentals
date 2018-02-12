function pollution(a = [], b = []) {

    let matrix = [];
    let poluted = [];

    for (let i = 0; i < a.length; i++) {

        let currentString = a[i].split(' ').filter(e => e != ' ').map(Number);
        matrix.push(currentString);
    }

    for (let i = 0; i < b.length; i++) {

        let commandLine = b[i].split(' ');
        let command = commandLine[0];
        let value = Number(commandLine[1]);

        if (command === 'breeze') {

            for (let i = 0; i < matrix.length; i++) {

                for (let j = 0; j < matrix[0].length; j++) {

                    if (i == value) {
                        if (matrix[i][j] - 15 > 0) {
                            matrix[i][j] -= 15;
                        } else {
                            matrix[i][j] = 0;
                        }
                    }

                }
            }

        }

        if (command === 'gale') {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {

                    if (j == value) {
                        if (matrix[i][j] - 20 > 0) {
                            matrix[i][j] -= 20;
                        } else {
                            matrix[i][j] = 0;
                        }
                    }
                }
            }
        }

        if (command == 'smog') {

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                    matrix[i][j] += value;
                }
            }
        }

    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {


            if (matrix[i][j] >= 50) {
                let polutedCell = `[${i}-${j}]`;
                poluted.push(polutedCell)
            }
        }
    }

    if (poluted.length != 0) {

        console.log(`Polluted areas: ${poluted.join(', ')}`);
    }
    else{
        console.log('No polluted areas');
    }

}

pollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
], ["breeze 1", "gale 2", "smog 25"]);

pollution([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  [ 
    "smog 11", "gale 3", 
    "breeze 1", "smog 2"
  ]
  );

pollution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24",
], ["breeze 1", "gale 2", "smog 35"]);