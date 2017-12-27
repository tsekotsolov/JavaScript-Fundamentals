function compoundInterest(arr){

    let [p,i,n,t] = arr;

    n = 12/n;

    let f = p*((1+(i/100)/n)**(n*t));

    return f.toFixed(2);

}

console.log(compoundInterest([100000, 5, 12, 25]))