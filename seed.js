var db = require('diskdb');
db = db.connect('db', ['items']);

// add an item
var apple = {
  name: 'apple',
  qty: 3
};

db.items.save(apple);

var items = [{
  name: 'pineapple',
  qty: 5
}, {
  name: 'banana',
  qty: 8
}, {
  name: 'pear',
  qty: 1
}]

db.items.save(items);

console.log(db.items.find()); // will return all the fruits
console.log(db.items.find({name : 'apple'})); // will return all the fruits with name as apple

console.log(db.items.findOne()); // will return the first fruits
console.log(db.items.find({name : 'apple'})); // will return the first fruits with name as apple
