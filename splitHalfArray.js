function splitHalfArray(array) {
    var newArray = [];
    var halfLength = Math.floor((array.length / 2));

    if (array.length % 2 === 1) {
    newArray.push(array.slice(0,halfLength));
    newArray.push(array.slice(halfLength + 1));
    }
    else {
        newArray.push(array.slice(0,halfLength));
        newArray.push(array.slice(halfLength));
    }
    return newArray;
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ])