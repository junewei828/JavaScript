var users = [
    {username:"Ann", 
    sites:[
        {url: 'siteA'},
        {url: 'siteB'}, 
        {url: 'siteC'}
    ]
},

    {username:'Ben', 
    sites:[
        {url: 'siteD'}, 
        {url: 'siteE'}, 
        {url: 'siteF'}
    ]
}
];


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

      printUsersWebsites(users);