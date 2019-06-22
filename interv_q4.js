function transformEmployeeData(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
        var person = arr[i];
        var obj = {};
        
        for (var j = 0; j < person.length; j += 1) {
            var key = person[j][0];
            var value = person[j][1];
            obj[key] = value;
        }
        result.push(obj);
    }

    return result;
}

var arr = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

console.log(transformEmployeeData(arr));
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]