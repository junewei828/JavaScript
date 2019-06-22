function valuePair(obj1, obj2, key) {
    return [obj1[key],obj2[key]];
}

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]