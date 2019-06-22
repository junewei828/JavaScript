function isFactorOf(number, factor) {
    console.log(number % factor === 0)    
}

isFactorOf(6,2); // => true
isFactorOf(-6, 2); // => true
isFactorOf(5,0); // => false
isFactorOf(22, 7); // => false