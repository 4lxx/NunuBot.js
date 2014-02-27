var teamSpeakClient = require("node-teamspeak"),
    config          = require('./../config.json'),
    log             = require("./console_out"),
    client          = new teamSpeakClient(config.teamspeak.server);

function send(command, arg, callback) {
  if (command) {
    client.send(command, arg ? arg : {}, function(status, response) {
      if (status.id === 0) {
        if (typeof(callback) === "function") {
          callback(response);
        }
      } else {
        log.error(status.msg);
      }
    });
  } else {
    console.error("missing argument");
  }
}

exports.connect = function(callback) {
  send("login", { client_login_name: config.teamspeak.username, client_login_password: config.teamspeak.password }, function() {
    send("use", { sid: config.teamspeak.serverID }, callback);
  });
};

exports.getClientList = function(callback) {
  send("clientlist", false, callback);
};

exports.getClientGroupList = function(client, callback) {
  send("channelgroupclientlist", { cid: client.cid }, callback);
}

exports.setChannelGroup = function(client, tier, callback) {
  send("setclientchannelgroup", { cgid: config.teamspeak.tierMap[tier], cid: client.cid, cldbid: client.client_database_id });
};

exports.sendMessage = function(client, message) {
  send("sendtextmessage", { targetmode: 1, msg: message, target: client.clid });
};

exports.poke = function(client, message) {
  send("clientpoke", { msg: message, clid: client.clid });
};

exports.rename = function() {};
exports.writeLog = function() {};