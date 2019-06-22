/*------------------------------------------------------------------------------
// bestScoresSum
//
// Write a function `bestScoresSum(arr)` that takes an array of objects as an argument.
// See the `people` arrays for an example of how the input data will look. The function
// should return the person's initials whose scores sum to the highest number.
// You can assume that there is at least one person in the input array.
//
// Examples:
//
// var people1 = [
//   { name: "April Ludgate", scores : [1,2,3,4] },
//   { name: "Andy Dwyer", scores : [10,3,2] },
//   { name: "Leslie Knope", scores : [5,7,9] },
//   { name: "Ben Wyatt", scores : [4,4,4,4] }
// ];
//
// var people2 = [
//   { name: "Ron Swanson", scores : [10, 3] },
//   { name: "Anne Perkins", scores : [4, 2] }
// ];
//
// bestScoresSum(people1); // =>'LK'
// bestScoresSum(people2); // => 'RS'
------------------------------------------------------------------------------*/

function sum(arr) {
    var total = 0;
    
    for (var i = 0; i < arr.length; i += 1) {
        total += arr[i];
    }
    return total;
}


function bestScoresSum(arr) {
    var bestScoreStudent = arr[0];
    
    for (var i = 0; i < arr.length; i += 1) {
        var person = arr[i];
        var scoreSum = sum(person.scores);
        
        if (sum(bestScoreStudent.scores) <= scoreSum) {
            bestScoreStudent = person;
        }
    }
    
    var fullName = bestScoreStudent.name.split(' ');
    var init = fullName[0][0] + fullName[1][0];
    return init;
}

var people1 = [
  { name: "April Ludgate", scores : [1,2,3,4] },
  { name: "Andy Dwyer", scores : [10,3,2] },
  { name: "Leslie Knope", scores : [5,7,9] },
  { name: "Ben Wyatt", scores : [4,4,4,4] }
];

var people2 = [
  { name: "Ron Swanson", scores : [10, 3] },
  { name: "Anne Perkins", scores : [4, 2] }
];

console.log(bestScoresSum(people1)); // =>'LK'
console.log(bestScoresSum(people2)); // => 'RS'




