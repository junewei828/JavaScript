function wordYeller(sentence) {
    var arr = sentence.split(" ");
    var new_arr = [];
    for (var i = 0; i < arr.length; i += 1) {
        
        if ((arr[i].indexOf('.') > -1) ||(arr[i].indexOf(',') > -1) ||(arr[i].indexOf('!') > -1) || (arr[i].indexOf('?') > -1) || (arr[i].indexOf(';') > -1) || (arr[i].indexOf(':') > -1)) {
            var new_ele = arr[i]
        }
        else new_ele = arr[i] + '!';    
        new_arr.push(new_ele);
    }
    var new_sen = new_arr.join(' ');
    if (new_sen) {
        return true;
    }
}

console.log(wordYeller("Stop it now! Please, wont you stop?"));
console.log(wordYeller("Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!")); //=> true