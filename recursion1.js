function countUp(num) {
    if (num >= 10) {
        console.log("done!");
    } else {
    console.log(num);
    countUp(num + 1);
    }
}

countUp(9);