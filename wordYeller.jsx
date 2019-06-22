function wordYeller(sentence) {
    var arr = sentence.split(" ");
    var new_arr = [];
    for (var i = 0; i < arr.length; i += 1) {
        new_ele = arr[i] + '!';
        new_arr.push(new_ele);
    }

    return new_arr;
}

console.log(wordYeller("Stop it now! Please, wont you stop?"));