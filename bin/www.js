//module dependencies
var server = require("../dist/server");
var debug = require("debug")("express:server");
var http = require("http");
const config = require('../dist/config/config');

var port = process.env.PORT || config.port;

//create http server
var app = server.Server.bootstrap().app;
app.set('url', config.url);
app.set("port", port);
var httpServer = http.createServer(app);

//listen on provided ports
httpServer.listen(port);

//add error handler
httpServer.on("error", onError);

//start listening on port
httpServer.on("listening", onListening);

console.log("Express started on port: "+port);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
}