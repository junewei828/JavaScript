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
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }

    return sum;
}

function nameInit(str) {
    var fullName = str.split(' ');
    return (fullName[0][0] + fullName[1][0]);
}
function bestScoresSum(people) {
    var bestScoreStudent = {};
    
    for (var i = 0; i < people.length; i += 1) {
        var student = people[i];
        if (bestScoreStudent['scores'] === undefined || sum(bestScoreStudent['scores']) < sum(student['scores'])) {
            bestScoreStudent = student;
        } 
    }
    var studentName = bestScoreStudent['name'];
    return nameInit(studentName);
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