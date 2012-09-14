express = require('express');

app = express.createServer();

app.get('/', function(req, res) {
  res.end('Hello world');
});

var port = process.env.PORT || 5000
app.listen(port);
console.log('Started on port ' + port);
