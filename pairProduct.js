function pairProduct(arr,num) {
    var result = [];
    var i = 0;
    while (i < arr.length) {
        var j = i + 1;
        while (j < arr.length) {
        if (arr[i] * arr[j] === num) {
            var ele = [i,j];
            result.push(ele)
        } j += 1;
    }
        i += 1;
    }
    return result;
}

console.log(pairProduct([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]