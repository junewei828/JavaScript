function isOdd(num) {
//     // if (num % 2 === 1 || num % 2 === -1) {
//     //     return "odd";
//     // } else return "even";

   return num % 2 !== 0
 }

// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true

function isEven(num) {
    // if (num % 2 === 1 || num % 2 === -1) {
    //     return "odd";
    // } else return "even";

    return !isOdd(num)
}

// console.log(isOdd(2));    // => false
// console.log(isOdd(5));    // => true
// console.log(isOdd(-17));  // => true
console.log(isEven(2)); // => true
console.log(isEven(5)); // => false