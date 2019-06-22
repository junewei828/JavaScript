function isSubstring(searchString, subString) {
    lowerSearch = searchString.toLowerCase();
    lowerSub = subString.toLowerCase();
    return lowerSearch.indexOf(lowerSub) > -1
     }
    

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false