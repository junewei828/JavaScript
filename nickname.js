function nickname(name) {
    var countVowel = 0;
    var vowels = 'aeiouAEIOU'.split('');

    for (var i = 0; i < name.length; i += 1) {
        var char = name[i];

        if (vowels.indexOf(char) > -1) {
            countVowel += 1;
        }

        if (countVowel === 2) {
            break;
        }
    }
    var nickname = name.slice(0, i + 1).toUpperCase();
    return nickname + '-' + nickname;

  }

console.log(nickname('manuel')); // => 'MANU-MANU'
console.log(nickname('pikachu')); // => 'PIKA-PIKA'
console.log(nickname('bootcamp')); // => 'BOO-BOO'
console.log(nickname('bob')); // => 'BOB-BOB'