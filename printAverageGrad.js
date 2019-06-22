function average(student){
    var grades = student.grades;
    var sum = 0;
    for (var i = 0; i < grades.length; i += 1) {
        sum += grades[i].score; 
    }
    var avg = sum /grades.length;
    return avg;
}


function printAverageGrade(students) {
    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        console.log(student.name, average(student));
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
  
  printAverageGrade(students3)