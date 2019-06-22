var x = 7;
var y = 8;
var z = 9;

x = y + z;
z = x;//17
x = y;//8
z = x + y;
y = z - x;
z = y;
x = y * z; 
z = y / z; 
x = (z - x) / (y + z);

var answer = x;
console.log(x);