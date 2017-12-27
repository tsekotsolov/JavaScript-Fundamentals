
// Variant 1 

function assign(arr){

    let object = {
        firstPropName:arr[1],
        secondPropName:arr[3],
        thirdPropName:arr[5],
    }

 let result = (`{ "${arr[0]}": "${object.firstPropName}", "${arr[2]}": "${object.secondPropName}", "${arr[4]}": "${object.thirdPropName}" }`);

 return JSON.parse(result);
}


// Variant 2
function assignObj(arr){

    let object = {
        
       [arr[0]]:arr[1],
       [arr[2]]:arr[3],
       [arr[4]]:arr[5],
    }
return object;
}

console.log(assignObj(['name', 'Pesho', 'age', '23', 'gender', 'male']));
