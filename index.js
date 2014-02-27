var config    = require('./config.json'),
    teamspeak = require('./lib/teamspeak'),
    log       = require('./lib/console_out');

var lolUser = [];

teamspeak.connect(function(){
  teamspeak.getClientList(function(clients) {
    filterClientList(clients);
  });
});

function filterClientList(clients) {
 clients.forEach(function(client) {
   config.teamspeak.lolChans.forEach(function(chanID) {
    if (chanID === client.cid) {
      lolUser.push(client);
      teamspeak.getClientGroupList(client, function(response) {
        console.log(response);
      });
    }
   });
 }); 
}