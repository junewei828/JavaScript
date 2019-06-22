function arrayBuilder(obj) {
    var arr = [];
    for (var ele in obj) {
        for (var i = 0; i < obj[ele]; i += 1) {
            arr.push(ele);
        }
    } 
    return arr;
}

console.log(arrayBuilder({'a': 3, 'b': 0, 'c': 2})); //=> [ 'a', 'a', 'a', 'c', 'c' ]
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> [])