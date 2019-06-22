// function plusFive(num){
//     console.log(num + 5)
// }


// plusFive(10);  // => 15
// plusFive(2); // => 7
// plusFive(-8); // => -3

// plusFive(100); // =>105

function isOdd(num) {
    if (num % 2 === 1 || num % 2 === -1) {
        return "odd";
    } else return "even";

}

console.log(isOdd(2));    // => false
console.log(isOdd(5));    // => true
console.log(isOdd(-17));  // => true