var express = require('express');
var app = express();
var db = require('diskdb');

db = db.connect('db', ['items']);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(request, response) {
  response.send('world');
});

app.get('/api/items', function(req, res) {
  res.json(db.items.find());
});

app.post('/api/items', function(req, res) {
  res.json(db.items.save(req.body));
});

app.put('/api/items', function(req, res) {
  res.json(db.items.update({
    _id: req.body._id
  }, {
    isCompleted: req.body.isCompleted,
    todo: req.body.todo
  }));
});

app.delete('/api/items/:_id', function(req, res) {
  res.json(db.items.remove({
    _id: req.params._id
  }));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
