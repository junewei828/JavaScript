function arrayBuilder(obj) {
    var result = [];
    for (var k in obj) {
        var i = 0;
        while (i < obj[k]) {
            result.push(k);
            i += 1;
        }
    }

    return result;
}

console.log(arrayBuilder({'a': 3, 'b': 0, 'c': 2})); //=> [ 'a', 'a', 'a', 'c', 'c' ])
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs'])
console.log(arrayBuilder({})); //=> [])