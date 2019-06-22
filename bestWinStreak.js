function bestWinStreak(str) {
    var longest = 0;
    var current = 0;

    for (var i = 0; i < str.length; i += 1) {
        var char = str[i];

        if (char === 'W') {
            current += 1;
        }
        else {
            current = 0;
        }
        
    if (current > longest) {
        longest = current;
    }
    }
    return longest;
}

console.log(bestWinStreak('WWLWWWLWW')); // => 3
console.log(bestWinStreak('WWLLWWWWW')); // => 5
console.log(bestWinStreak('WWWW')); // => 4
console.log(bestWinStreak('LLL')); // => 0