function doesKeyExist(obj, key) {
    if (obj[key] === undefined ) {
        return false;
    }
    return true;
} 


var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
console.log(doesKeyExist(obj1, 'course')); // => true