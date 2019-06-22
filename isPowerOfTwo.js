// function isPowerOfTwo(num) {
//     if (num < 1) {
//         return false;
//     } 
//     if (num === 1) {
//         return true;
//     } else {
//         return isPowerOfTwo(num / 2);
//     }
// }

function isPowerOfTwo(num) {
    while (num > 1) {
        num = num / 2;
    }
    return num === 1;
}


console.log(isPowerOfTwo(1));  // => true
console.log(isPowerOfTwo(32)); // => true
console.log(isPowerOfTwo(12)); // => false
console.log(isPowerOfTwo(33)); // => false
console.log(isPowerOfTwo(-8)); // => false
console.log(isPowerOfTwo(0)); // => false