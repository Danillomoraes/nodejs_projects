const request = require('request');
const fs = require('fs');

var fetchKey = () => {
  try {
    var keyString = fs.readFileSync('google.json');
    return JSON.parse(keyString);
  } catch (e) {
    console.log('failed read key');
    return false
  } finally {

  }
}


var geocodeAddress = function (address, callback)  {

  var key = fetchKey().key
  var urlg = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
  // console.log(urlg);

if (key) {

  request({
    url: urlg,
    json: true,
    proxy: "http://CPTM%5Cdanillom:Cptm0004@iraque.cptm.info:80/"
  }, (error, response, body) => {

    if(error){
      callback("Unable to connect to internet")
    }else if (body.status === "ZERO_RESULTS") {
      callback("None Adress Founc")
    }else if(body.status === "OK"){
      // console.log(response);
      var lat = body.results[0].geometry.location.lat;
      var lng = body.results[0].geometry.location.lng;

      callback(undefined, {
        Address:body.results[0].formatted_address,
        Latitude:lat,
        Longitude:lng
      });


    }else{
      console.log(JSON.stringify(body, undefined, 2));
      console.log(error);
      //console.log(response);

      }

    });
  }
}

module.exports = {
  geocodeAddress
}
