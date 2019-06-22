function elementCount(array) {
    var result = {};
    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];

        if (result[el] !== undefined) {
            result[el] += 1;
        }
        else {
            result[el] = 1;
        }
    }
    return result;
}

console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }