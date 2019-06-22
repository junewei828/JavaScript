function avgGrade(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i += 1) {
        var score = arr[i]['score'];
        sum += score;
    }
    
    var avg = sum / arr.length;
    return avg;
}

function passingStudents(students) {
    var names = [];

    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        var avg = avgGrade(student['grades']);
        if (avg >= 70) {
            names.push(student['name']);
        }
    }

    return names;
}

var students = [
    {
      "name": "Kush",
      "id": 12345,
      "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
    },
    {
      "name": "Ned",
      "id": 55555,
      "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
    },
    {
      "name": "Haseeb",
      "id": 94110,
      "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
    }
  ];
  
  console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]