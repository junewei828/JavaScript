function printNames(students) {

    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        console.log(student.name)
    }
}

var students1 = [
    { name : "Anthony" },
    { name : "Winnie" },
    { name : "Pawandeep" }
  ];
  
printNames(students1); 