function toFeet(distance) {
    var feet = [];

    for (var i = 0; i < distance.length; i += 1) {
        var ele = distance[i];

        if (ele.indexOf('yard') > -1) {
            feet.push(Number(ele.split(' ')[0])*3 + ' feet');
        } else {
            feet.push(ele);
        }
    }

    return feet;
}

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]
