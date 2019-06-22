function totalScore(str) {
    var scoreObj = {
        'J': 1,
        'Q': 2,
        'K': 3
    }
    var sum = 0;
    for (var i = 0; i < str.length; i += 1) {
        sum += scoreObj[str[i]];
    }
    return sum;
}

function winningHand(hand1, hand2) {
    var score1 = totalScore(hand1);
    var score2 = totalScore(hand2);

    if (score1 > score2) {
        return hand1;
    } else if (score2 > score1) {
        return hand2;
    } else {
        return 'DRAW';
    }
}

console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'