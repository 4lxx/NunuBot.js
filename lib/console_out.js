exports.info = function(message) {
  console.info("\x1B[33m" + message + "\x1B[39m");
};

exports.error = function(message) {
  console.error("\x1B[31m" + error + "\x1B[39m");
};
  