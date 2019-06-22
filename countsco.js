function countScores(people) {
    var scoresObj = {};

    for (var i = 0; i < people.length; i += 1) {
        var person = people[i];
        var name = person.name;
        var score = person.score;

        if (scoresObj[name]) {
            scoresObj[name] += score;
        }
        else {
            scoresObj[name] = score;
        }
    }
    return scoresObj;
}

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
console.log(countPpl); //=> { Anthony: 2, Fred: 10, Winnie: 12 }


var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }