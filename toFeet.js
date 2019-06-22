function yardToFeet(str) {
    var words = str.split(' ');
    return ((words[0] * 3) + ' feet');
}

yardToFeet('3 yards')

function toFeet(distance) {
    var newArray = [];

    for (var i = 0; i < distance.length; i += 1) {
        var el = distance[i];
        
        if (el.indexOf('feet') > -1) {
            newArray.push(el);
        } else if (el.indexOf('yards') > -1) {
            newArray.push(yardToFeet(el));
        }
    }

    return newArray;
}


var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
//
var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]