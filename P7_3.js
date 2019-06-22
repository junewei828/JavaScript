/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
    var best = 0;
    var current = 0;

    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === 'W') {
            current += 1;
        } else {
            current = 0;
        }
        if (current > best) {
            best = current;
        }
    }

    return best;
}

console.log(bestWinStreak('WWLWWWLWW')); // => 3
console.log(bestWinStreak('WWLLWWWWW')); // => 5
console.log(bestWinStreak('WWWW')); // => 4
console.log(bestWinStreak('LLL')); // => 0