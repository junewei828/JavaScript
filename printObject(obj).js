function printObject(obj) {
    for (var key in obj) {
        console.log(key + ' - ' + obj[key]);
    }
}

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp)