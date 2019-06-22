function objectSelect(obj, cb) {
    var newObj = {};

    for ( var k in obj) {
        if (cb(k, obj[k])) {
            newObj[k] = obj[k];
        }
    }
    return newObj;
}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

console.log(matchingPairs); //=> { one: "one", three: "three" }