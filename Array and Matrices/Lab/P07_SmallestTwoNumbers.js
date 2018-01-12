function smallestTwoNumbers(arr = []) {

  return arr.sort((a, b) => a - b).slice(0, 2);

}

smallestTwoNumbers([30, 15, 50, 5]);

