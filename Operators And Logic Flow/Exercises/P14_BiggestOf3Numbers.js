function findBiggestNumber(arr){

    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index]>biggestNumber) {
            biggestNumber=arr[index];
        }
    }
    return(biggestNumber);
}
