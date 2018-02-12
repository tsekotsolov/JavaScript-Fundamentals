function miner(input = []) {

    input = input.map(Number);
    input.splice(0, 0, 0);

    let bitcoins = 0;
    let daysOfPurchase = [];
    let totalMoney = 0;

    for (let i = 1; i < input.length; i++) {

        let currentGold = input[i];

        if (i % 3 !== 0) {

            totalMoney += currentGold * 67.51;
        }

        else{

            currentGold =currentGold*0.7;
            totalMoney+=currentGold * 67.51
        }

        if (totalMoney >= 11949.16) {
            currentBitcoins = Math.floor(totalMoney / 11949.16);
            bitcoins+=currentBitcoins;
            totalMoney-=currentBitcoins*11949.16;
            daysOfPurchase.push(i)
        }  
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins!=0) {
        console.log(`Day of the first purchased bitcoin: ${daysOfPurchase[0]}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

//  miner(['100', '200', '300']);
 //miner([ '50', '100']);
//miner(['3124.15', '504.212','2511.124']);