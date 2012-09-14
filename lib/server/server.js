express = require('express');
jade = require('jade');

app = express.createServer();
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/quiz.js', function(req, res) {
  res.sendfile('./lib/client/quiz.js');
});

app.get('/jquery-1.8.1.min.js', function(req, res) {
  res.sendfile('./vendor/jquery-1.8.1.min.js');  
});

app.get('/jquery-mobile/:file', function(req, res) {
  res.sendfile('./vendor/jquery-mobile/' + req.params.file);
});

app.get('/jquery-mobile/images/:file', function(req, res) {
  res.sendfile('./vendor/jquery-mobile/images/' + req.params.file);
});

app.post('/post', function(req, res) {
  res.send('Gratulerer!');
});

var port = process.env.PORT || 5000
app.listen(port);
console.log('Started on port ' + port);
