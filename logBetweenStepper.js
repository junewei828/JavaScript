// function logBetweenStepper(min,max,step) {
//     for (var i = min; i <= max; i += step) {
//         console.log(i)
//     }
// }

// logBetweenStepper(5,9,2)
// logBetweenStepper(-10, 15, 5)

function logBetweenStepper(min,max,step){
    var i = min;
    while (i <= max) {
        console.log(i);
        i += step
    }
}

logBetweenStepper(5, 9,2)