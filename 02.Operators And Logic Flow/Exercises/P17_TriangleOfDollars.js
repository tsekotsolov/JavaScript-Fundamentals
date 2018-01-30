function triangleOfDolars(n){

    let result = '';

    for (let index = 0; index <= n; index++) {
        result+=('$'.repeat(index));
        result+='\n'
    }
    return result;
}

