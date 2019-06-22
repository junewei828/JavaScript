function adults(people) {
    var ads = [];
    if (people.age >= 18) {
        ads.push(people[name])
    }
    return ads;
}

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]