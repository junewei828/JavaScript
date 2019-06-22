function countScores(people) {

    var scoresObj = {};

    for (var i = 0; i < people.length; i++) {
        var personObj = people[i];
        var name = personObj.name;
        var score = personObj.score;
    }
        if (scoresObj[name]) {
            scoresObj[name] += score;
        } else {
            scoresObj[name] = score;
    }
    return scoresObj;
}

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];
var countPpl = countScores(ppl);
console.log(countPpl);