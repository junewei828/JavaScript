
var magicify = function(number) {
  return (number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

console.log(isMagicNumer(26)); //=> true;
console.log(isMagicNumer(50)); //=> false;