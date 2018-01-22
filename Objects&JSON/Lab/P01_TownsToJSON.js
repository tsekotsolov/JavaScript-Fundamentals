function townsToJson (input=[]){

    let result = [];

    for (let i = 1; i < input.length; i++) {

        let [town,lat,long] = input[i].split('|').filter(e=>e!='');

        let myObject = {
            Town:town.trim(),
            Latitude:(Number)(lat),
            Longitude:(Number)(long)
        }
       
        result.push(myObject);
    }

    console.log(JSON.stringify(result));

}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);