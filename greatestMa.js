function greatestMap(ary, cb1, cb2) {
    var result = [];
    for (var i = 0; i < ary.length; i += 1) {
        var num1 = cb1(ary[i], i, ary);
        var num2 = cb2(ary[i], i, ary);

        if (num1 > num2) {
            result.push(num1);
        } else {
            result.push(num2);
        }
    }
    return result;
}

var ary1 = [1, 5, 10];

function squareRootRounder(num) {
  return Math.round(Math.sqrt(num));
}

function half(num) {
  return num / 2;
}

console.log(greatestMap(ary1, squareRootRounder, half)); //=> [ 1, 2.5, 5 ]
