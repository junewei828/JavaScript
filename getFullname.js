function getFullname(person) {
    var name = person.firstName + ' ' + person.lastName; 
    console.log(name);
}

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullname(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullname(p2); // => 'Charlie Brown'