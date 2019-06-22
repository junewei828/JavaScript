function nickname(name) {
    var vowels = 'aeiouAEIOU'.split('');
    var vowelCount = 0;
    for (var i = 0; i < name.length; i += 1) {
        if (vowels.indexOf(name[i]) > -1) {
            vowelCount += 1;
        }
        if (vowelCount === 2) {
            break;
        }
    }
    var nick = name.slice(0,i + 1).toUpperCase();
    var fullNick = nick + '-' + nick;
    return fullNick;
}

console.log(nickname('manuel')); // => 'MANU-MANU'
console.log(nickname('pikachu')); // => 'PIKA-PIKA'
console.log(nickname('bootcamp')); // => 'BOO-BOO'
console.log(nickname('bob')); // => 'BOB-BOB'