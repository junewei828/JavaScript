// function CapVowelsWord(word) {
//     var vowels = ['a','e', 'i', 'o', 'u'];
//     var lowerCase = word.toLowerCase();
//     var arr = [];
    
//     for (var i = 0; i < word.length; i += 1) {
//         var char = lowerCase[i];
//         if (vowels.indexOf(char) !== -1) {
//             arr.push(char.toUpperCase());
//         } else {
//             arr.push(char);
//         }
//     } return arr.join("");
// } 


// console.log(CapVowelsWord('wOrlds'));

// function capVowels(sentence) {
//     var words = sentence.split(" ");
//     var newWords = [];

//     for (var i = 0; i < words.length; i += 1) {
//         var word = CapVowelsWord(words[i]);
//         newWords.push(word);
//     }
//     return newWords.join(" ");
// }

function capVowels(string) {
    var vowels = "aeiouAEIOU".split("");
    var new_string = "";

    for (var i = 0; i < string.length; i += 1) {
        if (vowels.indexOf(string[i]) > -1) {
            new_string += string[i].toUpperCase();
        } else {
            new_string += string[i].toLowerCase();
        }
    } 
    return new_string;
}

console.log(capVowels('hello world')); // => 'hEllO wOrld')
console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld')
console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp')