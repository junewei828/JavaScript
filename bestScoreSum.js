function scoreSum(obj) {
    var scores = obj.scores;
    var sum = 0;

    for (var i = 0; i < scores.length; i += 1) {
         sum += scores[i];
    }
    return sum;
}

function bestScoresSum(arr) {
    var bestScoreStudent = arr[0];

    for (var i = 0; i < arr.length; i += 1) {
        var student = arr[i];

        if (scoreSum(student) > scoreSum(bestScoreStudent)) {
            bestScoreStudent = student;
        }
    }

    var fullName = bestScoreStudent['name'].split(' ');
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