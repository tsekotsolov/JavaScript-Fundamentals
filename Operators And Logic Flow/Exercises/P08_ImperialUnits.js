function inchConvertor(inch){

    let feet = Math.floor(inch/12);
    let inches = inch%12;

    console.log(`${feet}'-${inches}"`);

}
