function capWords(words) {
    new_arr = []
    for (i = 0; i < words.length; i += 1) {
        ele = words[i].toUpperCase();
        new_arr.push(ele);
    }
    console.log(new_arr)
}

capWords(['hello', 'boOtCaMp', 'PREP!'])