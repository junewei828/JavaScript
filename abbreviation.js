function deleteVowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var arr = str.split("");
    var new_arr = [];
    for (i = 0; i < arr.length; i += 1) {
        if ((arr.length > 3) && (vowels.indexOf(arr[i]) > -1)) {
            continue;
        } else new_arr.push(arr[i])
    }
    return new_arr.join("");
}

function abbreviate(sentence) {
    arry = sentence.split(" ");
    new_arry = [];
    for (var i = 0; i < arry.length; i += 1) {
        var ele = deleteVowel(arry[i]);
        new_arry.push(ele);
    }
    return new_arry.join(" ");
 }

console.log(deleteVowel('bootcamp'));
console.log(abbreviate('bootcamp prep is fun'));
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('how are you')); // => 'how are you'