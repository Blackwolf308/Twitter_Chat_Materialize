const ref = new Firebase("https://chat-app308.firebaseio.com");
$(document).ready(function() {
  $("button").click(function() {
    const site = this.id;
    ref.authWithOAuthPopup(site, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated:", authData[site]);
        ref.set ({
          "user":{
            'authData': authData[site]
          }
        });
        window.location.replace("app.html");
      }
    });
  })
})
