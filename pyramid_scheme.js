function pyramidScheme(base) {
    var pyramid = [base];

    for (var i = 0; i < base.length - 1; i += 1) {
        var arr = [];

        for (var j = 0; j < pyramid[0].length - 1; j += 1) {
        var el1 = pyramid[0][j];
        var el2 = pyramid[0][j + 1];
        var newArr = el1 + el2;
        arr.push(newArr);
       }
       pyramid.unshift(arr);
    }
    return pyramid;
}

console.log(pyramidScheme([2, 2, 2, 2]));