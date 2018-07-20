console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

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
