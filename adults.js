function adults(people) {
    var arr = [];
    for (var i = 0; i < people.length; i += 1) {
        var age = people[i].age;
        if (age >= 18) {
            arr.push(people[i].name)
    }
}
    return arr
}

var ppl = [
      {name: 'John', age: 20},
      {name: 'Jim', age: 13},
      {name: 'Jane', age: 18},
      {name: 'Bob', age: 7}
    ];
    
    console.log(adults(ppl)); // => [ 'John', 'Jane' ]
    