function catBuilder(name, color, toys) {
   var cat = { name: name,
    color: color,
    toys: toys }
    return console.log(cat);
}

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

 var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
 cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }