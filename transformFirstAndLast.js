function transformFirstAndLast(array) {
  var obj = {};
  for (var i = 0; i < Math.floor(array.length / 2); i += 1) {
    obj[array[i]] = array[array.length - 1 - i];
  }
  return obj;
}

console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));
console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', '1','Costner', 'Spacey']));