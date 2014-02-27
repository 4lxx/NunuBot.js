var config  = require('./../config.json'),
    teemo   = require("resteemo")(config.resteemo.contact),
    log     = require("./console_out");
    
exports.getRankedTier = function(nickname) {
  teemo.player.leagues(config.resteemo.region, nickname, function(error, response) {
    if (!response) {
      log.error(error || "someting went wrong with resteemo api");
      return;
    }
    response.data.summonerLeagues.array.forEach(function(league) {
      if (league.queue === "RANKED_SOLO_5x5") {
        log.info(nickname + "->" + league.tier);
      }
    });
  });
};

exports.getIngameStatus = function(client) {
  
};
  