function nickname(name) {
    var vowels = 'aeiouAEIOU'.split('');
    var vowelcount = 0;

    for (var i = 0; i < name.length; i += 1) {
        var char = name[i];
        if (vowels.indexOf(char) > -1) {
            vowelcount += 1;
        }

        if (vowelcount === 2) {
            var nick = name.slice(0, i + 1).toUpperCase() + '-' + name.slice(0, i + 1).toUpperCase() ;
            return nick;
        }
    }
    // var nick = name.slice(0, i + 1).toUpperCase() + '-' + name.slice(0, i + 1).toUpperCase() ;
    // return nick;
    return name.toUpperCase() + '-' + name.toUpperCase();
}

console.log(nickname('manuel')); // => 'MANU-MANU'
console.log(nickname('pikachu')); // => 'PIKA-PIKA'
console.log(nickname('bootcamp')); // => 'BOO-BOO'
console.log(nickname('bob')); // => 'BOB-BOB'