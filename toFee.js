function toFeet(distances) {
    var feet = [];
    
 for (var i = 0; i < distances.length; i += 1) {
    var el = distances[i];

    if (el.indexOf('yard') > -1) {
        var orig = el.split(' ');
        var newEl = Number(orig[0] * 3) + ' feet';
        feet.push(newEl);
    } else {
        feet.push(el);
        }
    }

    return feet;
} 

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]