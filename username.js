/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]*/

function usernames(names) {
    var users = [];
    for (var i = 0; i < names.length; i += 1) {
        var name = names[i];
        var firstChar = name[0].toLowerCase();
        var firstLast = name.split(' ');
        var lastName = firstLast[1].toLowerCase();
        var username = firstChar + lastName;
        users.push(username);
    }

    return users;
}

var names = [
    'Oscar Alvarez',
    'Danny Catalano',
    'Kurstie Ozuna',
    'Matt Haws'
  ];
  
  console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]