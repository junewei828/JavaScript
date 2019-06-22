function hasSymmetry(array) {
    var firstHalf = '';
    var secondHalf = '';
    for (var i = 0; i <= Math.floor(array.length / 2); i +=1) {
        firstHalf += array[i];
    }
    console.log(firstHalf);
    for (var j = array.length - 1; j >= Math.floor(array.length / 2); j--) {
        secondHalf += array[j];
    }
console.log(secondHalf);

    if (firstHalf === secondHalf) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); //=> true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));  //=> false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); //=> false