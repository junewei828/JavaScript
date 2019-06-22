function isPrime(number) {
    //check if no nums less than 'number' divide into 'number'.
    for (var i = 2; i < number; i += 1) {
        if (number % i === 0) {
            // if i devides into number, then number is not prime!
            return false;
        } 
        }
    // we only know that a number is prime, after we checked all possible factors.
    return true;

}

console.log(isPrime(2)) // => true
console.log(isPrime(101))
console.log(isPrime(10))
console.log(isPrime(8923877))