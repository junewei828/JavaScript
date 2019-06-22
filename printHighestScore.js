function printBestScore(student) {
    var grades = student.grades;
    var max = null;
      for (var i = 0; i < grades.length; i += 1) {
          var grade = grades[i];
          if (max === null || grade.score > max) {
              max = grade.score;
          }
          }
          return max;
      }
     
function printBestGrade(students) {
    for (var i = 0; i < students.length; i ++) {
        var student = students[i];
        var maxScore = printBestScore(student);
        console.log(student.name, maxScore);
    }
}

var students3 = [
    {
      name : "Anthony",
      id : 0,
      grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
    }, {
      name : "Winnie",
      id : 1,
      grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
    }, {
      name : "Pawandeep",
      id : 2,
      grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
    }
  ];

  printBestGrade(students3);