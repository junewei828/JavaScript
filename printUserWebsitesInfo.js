var users = [
    {
        username: 'Ann',
        sites:[
            {url: 'https://abc.com', load: 21, userCount: 210000, pop: 32},
            {url: 'https://cnn.com', load: 21, userCount: 210000, pop: 32},
            {url: 'https://adnc.com', load: 21, userCount: 210000, pop: 32},]
    },

    {
        username: 'Ann',
        sites:[
            {url: 'https://abc.com', load: 21, userCount: 210000, pop: 32},
            {url: 'https://cnn.com', load: 21, userCount: 210000, pop: 32},
            {url: 'https://adnc.com', load: 21, userCount: 210000, pop: 32},
        ]
    }
]

function printUsersWebsitesInfo (users) {
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      console.log("~~" + user.username + "~~");
  
      for (var j = 0; j < user.sites.length; j++) {
        var site = user.sites[j];
        console.log("  -" + site.url);
        console.log("    -load: " + site.load + "%");
        console.log("    -# of users: " + site.userCount);
        console.log("    -popularity score: " + site.pop);
      }
    }
  }

  printUsersWebsitesInfo(users); 