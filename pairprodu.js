// function pairProduct(arr, num) {
//     var result = [];

//     for (var i = 0; i < arr.length; i += 1) {
//         var num1 = arr[i];
//         for (var j = i + 1; j < arr.length; j += 1) {
//             var num2 = arr[j];
//             if (num1 * num2 === num) {
//                 result.push([i, j]);
//             }
//         }
//     }
//     return result;
// }

function pairProduct(arr, num) {
    var result = [];
    var i = 0;

    while (i < arr.length) {
        var num1 = arr[i];

        var j = i + 1;
        while (j < arr.length) {
            var num2 = arr[j];
            if (num1 * num2 === num) {
                result.push([i,j]);
            }
            j += 1;
        }
        i += 1;
    }
    return result;
}

console.log(pairProduct([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]);
console.log(pairProduct([1,2,3,4,5], 8)); //=> [ [ 1, 3 ] ])
console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ])