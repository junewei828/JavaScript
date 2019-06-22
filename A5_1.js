function highestScore(students) {
    var highest = students[0];

    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        var score = student['score'];
        if (score > highest['score']) {
            highest = student;
        }
    }
    var fullName = highest['name'].split(' ');
    var init = fullName[0][0] + fullName[1][0];
    var str = init + highest['id'];
    return str;
}

var students = [
    {name: 'Alvin Zablan', id: 128, score: -42},
    {name: 'Eliot Bradshaw', id: 32, score: 57},
    {name: 'Tommy Duek', id: 2, score: 99},
    {name: 'Fred Sladkey', id: 256, score: 94}
   ];
   
   console.log(highestScore(students)); //=> 'TD2'