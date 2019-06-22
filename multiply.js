function multiply(a,b) {
    if (b === 0) {
        return 0;
    } 

    var result = a + multiply(a,b-1);
    return result;
}

console.log(multiply(3,5));