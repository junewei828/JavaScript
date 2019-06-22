function doesKeyExist(obj, key) {
    if (obj[key]) {
        return true;
    } else {
        return false;
    }
}

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(obj1, 'course')); // => true
console.log(doesKeyExist(obj1, 'name')); // => false
