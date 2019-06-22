function countOfLetter(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i += 1) {
        if (string[i].toLowerCase() === char) {
            count += 1;
        }
    } 
    return count;
}

console.log(countOfLetter('mississippi', 's')); // => 4)
console.log(countOfLetter('MISSISSIPPI', 'p')); // => 2)
console.log(countOfLetter('BOOTCAMP', 't')); // => 1)