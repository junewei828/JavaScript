function highestScore(students) {
    var str = '';
    var highest = students[0];

    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];

        if (highest.score < student.score) {
            highest = student;
        }
    }
        var Sname = highest.name.split(' ');
        var firstLetters = Sname[0][0] + Sname[1][0];
        str += firstLetters + highest.id;
        
        return str;
}

var students = [
    {name: 'Alvin Zablan', id: 128, score: -42},
    {name: 'Eliot Bradshaw', id: 32, score: 57},
    {name: 'Tommy Duek', id: 2, score: 99},
    {name: 'Fred Sladkey', id: 256, score: 94}
   ];
  
   console.log(highestScore(students)); //=> 'TD2'