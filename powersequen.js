function powerSequence(base, length) {
    var seq = [base];

    while(seq.length < length) {
        var last = seq[seq.length - 1];
        seq.push(last * base);
    }
    return seq;
}

console.log(powerSequence(3, 4));