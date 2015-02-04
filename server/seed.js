var db = require('diskdb');
db = db.connect('server/db', ['items']);

// add an item
var apple = {
  part1: 'hello',
  part2: 'you'
};

db.items.save(apple);

var items = [{
  part1: 'good bye',
  part2: 'idiot'
}, {
  part1: 'sup',
  part2: 'dude'
}, {
  part1: 'lates',
  part2: 'man'
}]

db.items.save(items);

console.log(db.items.find()); // will return all the fruits
console.log(db.items.find({part1 : 'hello'})); // will return all the fruits with part1 as apple

console.log(db.items.findOne()); // will return the first fruits
console.log(db.items.find({part1 : 'hello'})); // will return the first fruits with part1 as apple
