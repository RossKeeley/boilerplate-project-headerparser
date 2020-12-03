// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
  // Use req.header to access HTTP headers values and assign to vaiables
  const ipAddressRes = req.header('x-forwarded-for');
  const languageRes = req.header('Accept-Language');
  const softwareRes = req.header('User-Agent')
  // Return json response of object containing key: value pairs where values are the HTTP header variables
  res.json({
    ipaddress: ipAddressRes,
    language: languageRes,
    software: softwareRes
    });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
