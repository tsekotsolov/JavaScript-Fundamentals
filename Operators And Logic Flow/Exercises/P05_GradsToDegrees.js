function gradsToDegrees(grad) {
    
    deg= (grad*0.90)%360;
    deg = deg < 0 ? 360 + deg : deg;
    return deg;
}

console.log(gradsToDegrees(-450));