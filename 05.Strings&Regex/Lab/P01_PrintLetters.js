function printLetters(input){

    let result = input.split('');

    for (let i = 0; i < result.length; i++) {
       
        console.log(`str[${i}] -> ${input[i]}`);
    }
    
}

printLetters('Hello, world');