function sumArr(base) {
    var arr = [];
    for (var i = 0; i < base.length - 1; i += 1) {
        var num1 = base[i];
        var num2 = base[i + 1];
        var sum = num1 + num2;
        arr.push(sum);
    }
    return arr;
}

function pyramidScheme(base) {
    var pyramid = [base];
    for (var i = 1; i < base.length; i += 1) {
        pyramid.unshift(sumArr(pyramid[0]));
    }
    return pyramid;
}

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
console.log(p1); // =>
//  [
//    [ 85 ],
//    [ 37, 48 ],
//    [ 15, 22, 26 ],
//    [ 5, 10, 12, 14 ],
//    [ 2, 3, 7, 5, 9 ]
//  ]

var p2 = pyramidScheme([2, 2, 2, 2]);
// p2 // =>
//  [
//    [ 16 ],
//    [ 8, 8 ],
//    [ 4, 4, 4 ],
//    [ 2, 2, 2, 2 ]
//  ]