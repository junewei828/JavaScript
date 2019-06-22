function arrayBuilder(count) {
    var arr = [];

    for (var k in count) {
        var num = count[k];

        for (var i = 0; i < num; i += 1) {
            arr.push(k);
        }
    }

    return arr;
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs'])
console.log(arrayBuilder({})); //=> [])