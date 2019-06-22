// function fizzBuzz(max) {
//     for (i = 0; i <= max; i += 1){
//         if (((i % 3 === 0) || (i % 5 === 0) ) && !((i % 3 === 0) && (i % 5 === 0))){
//             console.log(i)
//         }
//     }
// }

// fizzBuzz(20)

function fizzBuzz(max) {
    for (var i = 0; i <= max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !==0) {
            console.log(i);
        }
    }
}
fizzBuzz(20)