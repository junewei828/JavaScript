function printUsersWebsites (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}


var users = [
    {
        username:'Ann',
        sites: [{url: 'https://abc.com'},
                {url: 'https://cmd.com'},
                {url: 'https://shud.com'},
            ]
        },
    {
        username:'Ben',
        sites: [{url: 'https://abc.com'},
                {url: 'https://cmd.com'},
                {url: 'https://shud.com'},]
    }]

 printUsersWebsites(users); // uncomment when ready to test