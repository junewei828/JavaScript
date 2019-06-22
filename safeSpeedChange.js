function safeSpeedChange(speeds) {
    for (var i = 0; i < speeds.length - 1; i += 1) {
        if (Math.abs(speeds[i] - speeds[i + 1]) > 5) {
            return false;
        }
    }
    return true;
}

console.log(safeSpeedChange([3, 3, 2, 6, 8, 7])); //=> true
console.log(safeSpeedChange([3, 3, 2, 6, 12, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false