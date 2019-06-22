function mirrorArray(array) {
    var half = [];
    for (var i = array.length -1 ; i >= 0; i -= 1) {
        half.push(array[i])
    }
    return array.concat(half);
}

console.log(mirrorArray([1,2,3]));
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]