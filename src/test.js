var data = require('../data/grades.json');
var parser = require('./grade_parser');

var newCount = 0;
for(let students in data){
  if(parser.inDecline(data[students]) == true){
    newCount++
  }
}
console.log(newCount);
