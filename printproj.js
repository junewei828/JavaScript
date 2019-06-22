function printObject(obj) {
    for (var k in obj) {
        console.log(k + ' - ' + obj[k]);
    }
}

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints
