//console.log('i dont know what im doing with my life');
const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const request =require('request');

var darkSecret = "c5876f20dbf92c97d78eb1425601206f";

const argv = yargs.options ({
  address: {
    demand: true,
    alias: 'a',
    describe: 'Address to fetch weather',
    string: true
  }
})
.help()
.alias("help", "h")
.argv;

var r = undefined;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));

    var long = results.Longitude;
    var late = results.Latitude;
    var url = `https://api.darksky.net/forecast/${darkSecret}/${late},${long}?lang=pt&si=temperature`;

    console.log(url);

    request({
      rejectUnauthorized: false,
      url: url,
      json: true,
      proxy: "http://CPTM%5Cdanillom:Cptm0004@iraque.cptm.info:80/"

    }, (error, response, body) => {
      if (error) {
        console.log(error);
      }else {
        console.log(JSON.stringify(body, undefined, 2));
        //console.log(body.currently);
      }
    })
  }
});


// console.log(key);
