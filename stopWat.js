function twoDigits(num) {
    if (num < 10) {
        return '0' + num;
    }
    else {
        return num;
    }
}

function stopWatch(totalSeconds) {
    var hour = twoDigits(Math.floor(totalSeconds / 3600));
    var min = twoDigits(Math.floor((totalSeconds / 60) % 60));
    var sec = twoDigits(totalSeconds % 60);
    var time = hour + ':' + min +':' + sec;
    return time;
}

console.log(stopWatch(0)); // => '00:00:00'
console.log(stopWatch(4)); // => '00:00:04'
console.log(stopWatch(128)); // => '00:02:08'
console.log(stopWatch(1234)); // => '00:20:34'
console.log(stopWatch(3612)); // => '01:00:12'
console.log(stopWatch(7640)); // => '02:07:20'
console.log(stopWatch(86400)); // => '24:00:00'
console.log(stopWatch(86522)); // => '24:02:02'
console.log(stopWatch(99999)); // => '27:46:39'