var nunu            = nunu || {},
    teamSpeakClient = require("node-teamspeak");

nunu.TeamSpeak = (function() {
  var client = new teamSpeakClient("localhost");

  function connect(callback) {
    client.send("login", { client_login_name: "foo", client_login_password: "bar" }, function(error, response) {
      if (response) {
        callback();
      }
    });
  }
    
  function rename() {

  }

  function sendMessage(clid, message) {

  }
});