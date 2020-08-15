const express = require('express');
const app = express();
const path = require('path');

// Serve static files....
app.use(express.static(__dirname + '/dist/footballdata'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/footballdata/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);