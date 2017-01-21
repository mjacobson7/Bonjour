var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 4500;

app.use(express.static(__dirname + './../public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(port, function() {
  console.log("Now listening on port #", port);
})
