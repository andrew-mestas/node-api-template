var express = require("express");
var app = express();
var path = require("path");
var http = require('http').Server(app);
var api = require('./routes/routes.js');
var CORS = require('./lib/CORS.js');
var bodyParser = require('body-parser');
var port = process.env["PORT"] || 8080;

app.use(CORS);
app.use(bodyParser.json({limit: '50mb'}));

app.use("/api", api);

http.listen(port, function(){
	console.log("Connected to port", port);
});