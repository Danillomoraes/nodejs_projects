//console.log('i dont know what im doing with my life');
const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=59%20rua%20terra%20roxa%20cajamar',
  json: true
}, (error, response, body) => {
console.log(JSON.stringify(body, undefined, 2));
});
