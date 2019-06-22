function countHalves(n) {
    if (n < 1) {
        console.log("done!");
    } else {
        console.log(n);
        countHalves(n / 2);
    }
}

countHalves(20);