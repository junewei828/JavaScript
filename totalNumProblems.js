function totalNumProblems(assessments) {
    var total = 0;

    for (var k in assessments) {
        var assessment = assessments[k];
        var problems = assessment.problems;
        total += problems.length;
    }

    return total;
}

var assessments = {
    w1d5: {
      totalPoints: 7,
      problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
    },
    w2d1: {
      totalPoints: 10,
      problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
    },
    w2d5: {
      totalPoints: 7,
      problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
    },
    w3d1: {
      totalPoints: 7,
      problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
    },
    w3d5: {
      totalPoints: 5,
      problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
    },
    w4d1: {
      totalPoints: 5,
      problems: ['not', 'so', 'fast']
    },
    w4d5: {
      totalPoints: 4,
      problems: [':)']
    }
  }
  
  console.log(totalNumProblems(assessments)); // => 29