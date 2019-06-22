function snakeToCamel(str) {
    var arr = str.split('_');
    var str = ''

    for (var i = 0; i < arr.length; i += 1) {
        var word = arr[i];
        var firstChar = word[0].toUpperCase();
        var rest = word.slice(1).toLowerCase();
        var newWord = firstChar + rest;
        str += newWord;
    }

    return str;
}

console.log(snakeToCamel('snakes_go_hiss')); // => 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // => 'SayHelloWorld'
console.log(snakeToCamel('bootcamp_prep_is_cool')); // => 'BootcampPrepIsCool'
console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol')); // => 'BootcampPrepIsCool'
