function winningHand(hand1, hand2) {
    var points = {
        'J' : 1,
        'Q' : 2,
        'K' : 3
    }
    var hand1P = 0;
    var hand2P = 0;

    for (var i = 0; i < hand1.length; i += 1) {
        var char1 = hand1[i];
        hand1P += points[char1];
        }
    for (var i = 0; i < hand2.length; i += 1) {
        var char2 = hand2[i];
        hand2P += points[char2];
    }

    if (hand1P > hand2P) {
        return hand1;
    } else if (hand1P === hand2P){
        return 'DRAW';
    } else {
        return hand2;
    }
    }

console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'


