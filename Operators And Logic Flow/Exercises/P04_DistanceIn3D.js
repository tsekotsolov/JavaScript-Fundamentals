function calcDistance(arr) {

    let pointA = {

        x: arr[0],
        y: arr[1],
        z: arr[2]
    }

    let pointB = {

        x: arr[3],
        y: arr[4],
        z: arr[5]
    }

    let distance = Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2 + (pointA.z - pointB.z) ** 2)

    
    return(distance);

}
