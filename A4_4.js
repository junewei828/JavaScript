/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/
function sillyCipher(sentence, cipher) {
    var str = '';

    for (var i = 0; i < sentence.length; i += 1) {
        var char = sentence[i];

        if (cipher[char] !== undefined) {
            str += cipher[char];
        }
        else {
            str += '.';
        }
    }

    return str;
}

console.log(sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"})); //=> 'cxxro'
console.log(sillyCipher("apple", { a : "c", p : "x"})); //=> 'cxx..'
console.log(sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"})); //=> '.ee....q.q..q!'
console.log(sillyCipher("twmce", { m : "n", t : "d", w : "a"})); //=> 'dan..''