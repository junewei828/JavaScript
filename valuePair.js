function valuePair(obj1, obj2, key) {
    arr = [];
    arr.push(obj1[key]);
    arr.push(obj2[key]);
    return arr
}

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};
console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]