function getFullname(person) {
    return (person.firstName +' ' +person.lastName);
}

var p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullname(p1)); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullname(p2)); // => 'Charlie Brown'