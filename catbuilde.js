function catBuilder(name, color, toys) {
    var cat = {
    name : name,
    color: color,
    toys: toys
    };
    return cat;
}

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
console.log(cat1); // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
console.log(cat2); // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }