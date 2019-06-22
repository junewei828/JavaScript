function safeSpeedChange(speeds) {
    for (var i = 0; i < speeds.length - 1; i += 1) {
        var speed1 = speeds[i];
        var speed2 = speeds[i + 1];
        var diff = speed2 - speed1;
        if (Math.abs(diff) > 5) {
            return false;
        }
    }
    return true;
}
console.log(safeSpeedChange([3, 3, 2, 6, 8, 7])); //=> true
console.log(safeSpeedChange([3, 3, 2, 6, 12, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false