function toDoubleDigits(num) {
    var str = '';
    if (num > 10) {
        str = num;
    }
    else {
        str = ('0'+ num);
    }
    return str;
}


function stopWatch(totalSeconds) {
    var hour = toDoubleDigits(Math.floor(totalSeconds / 3600));
    var mins = toDoubleDigits(Math.floor(totalSeconds / 60) % 60);
    var sec = toDoubleDigits(totalSeconds % 60);

    var time = hour + ':' + mins + ':' + sec;
    return time;
}

console.log(stopWatch(0)); // => '00:00:00'
console.log(stopWatch(4)); // => '00:00:04'
console.log(stopWatch(128)); // => '00:02:08'
console.log(stopWatch(86522));