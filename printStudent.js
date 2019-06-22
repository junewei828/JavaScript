function printStudents(students) {
    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        console.log(student.name, 'is student #', student.id)
    }
}

var students2 = [
    {
      name : "Anthony",
      id : 0
    }, {
      name : "Winnie",
      id : 1
    }, {
      name : "Pawandeep",
      id : 2
    }
  ];
  
  printStudents(students2);