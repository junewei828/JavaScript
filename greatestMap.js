function greatestMap(ary, cb1, cb2) {
    var newArray = [];

    for (var i = 0; i < ary.length; i += 1) {
        var result1 = cb1(ary[i], i, ary);
        var result2 = cb2(ary[i], i, ary);
        if (result1 > result2) {
            newArray.push(result1);
        }
        else {
            newArray.push(result2);
        }
    }

    return newArray;
}

var ary1 = [1, 5, 10];
function squareRootRounder(num) {
  return Math.round(Math.sqrt(num));
}
function half(num) {
  return num / 2;
}
console.log(greatestMap(ary1, squareRootRounder, half)); //=> [ 1, 2.5, 5 ]