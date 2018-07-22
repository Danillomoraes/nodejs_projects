console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//console.log(_.isString(true));
//console.log(_.isString('Danillo'));

var filteredArray = _.uniq(['Danillo',1,'Danillo',1,2,3,4,5]);
console.log(filteredArray);

var res = notes.addFunc(1,2);

console.log(res);



// var user = os.userInfo();
// console.log(user);
//
// fs.appendFile('greetings.txt', `Hello World!  ${user.username} !`, function (err) {
//   if (err) {
//     console.log('unable to write');
//   }
// });
