// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

// var users1 = your code here;

function printUsers(users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log(user.id + ": " + user.username);
    }
  }

  var users = [{id: 0, username: "Ann"},
               {id: 1, username: "Bob"},
               {id: 2, username: "Car"},
               {id: 3, username: "Dog"}]

printUsers(users);