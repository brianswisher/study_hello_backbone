(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var db = require('diskdb');
  db = db.connect('server/db', ['items']);

  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/hello', function(req, res) {
    res.send('world');
  });

  router.get('/api/items', function(req, res) {
    res.json(db.items.find());
  });

  router.post('/api/items', function(req, res) {
    res.json(db.items.save(req.body));
  });

  router.put('/api/items', function(req, res) {
    res.json(db.items.update({
      _id: req.body._id
    }, {
      name: req.body.name,
      qty: req.body.qty
    }));
  });

  router.delete('/api/items/:_id', function(req, res) {
    res.json(db.items.remove({
      _id: req.params._id
    }));
  });

  module.exports = router;

}());
