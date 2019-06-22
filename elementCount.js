function elementCount(array) {
    count = {};

    for (var i = 0; i < array.length; i += 1) {
        var ele = array[i];

        if (count[ele] === undefined) {
            count[ele] = 1;
        }
        else {
            count[ele] += 1;
            }
        }

        return count;
} 

console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }
