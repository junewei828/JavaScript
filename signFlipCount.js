function signFlipCount(arr) {
    var flipNum = 0;
    for (var i = 0; i < arr.length; i += 1) {
        if ((arr[i] > 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] > 0)) {
            flipNum += 1;
        }
    } 
    return flipNum;
}

console.log(signFlipCount([5, 6, 10, 3])); //=> 0)
console.log(signFlipCount([-12, 0, -3, -5])); //=> 0)
console.log(signFlipCount([-12, 10, -3, -5])); //=> 2)
console.log(signFlipCount([1, -2, -3, -4])); //=> 1)
console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3)
