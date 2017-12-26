function calcDistance(arr){

    let [speed1,speed2,time] = arr;

    let distance1 = (speed1*1000/3600)*time;
    let distance2 = (speed2*1000/3600)*time;

    let diff=Math.abs(distance1-distance2)

    return diff;
}

