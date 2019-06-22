
// function removeFromFront(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   else {
//   arr.shift();
//   return arr;
//   }
// }
// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]


function removeFromFront(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    arr.shift();
    return arr;
  }
}


