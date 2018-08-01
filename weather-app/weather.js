const request =require('request');


var requestWeather = (results, callback) => {

  var long = results.Longitude;
  var late = results.Latitude;
  var darkSecret = "c5876f20dbf92c97d78eb1425601206f";
  var url = `https://api.darksky.net/forecast/${darkSecret}/${late},${long}?lang=pt&si=temperature`;

  // console.log(url);

  request({
    rejectUnauthorized: false,
    url: url,
    json: true,
    proxy: "http://CPTM%5Cdanillom:Cptm0004@iraque.cptm.info:80/"

  }, (error, response, body) => {
    if (error) {
      console.log(error);
      console.log(response);
      callback("Unable to connect to darksky api");
    }else if(response.statusCode === 400) {
      // console.log('Unable to fetch weather');
      callback("Unable to fetch the weather");
    }else {
      // console.log(JSON.stringify(body, undefined, 2));
      callback(undefined, {
        "Temperatura": body.currently.temperature,
        "Sumario": body.hourly.data[0].summary
      })
      // console.log(`Temperatura: ${body.currently.temperature} °C`);
      // console.log(`Sumario: ${body.hourly.summary}`);
      //console.log(body.currently);
    }
  })
}

module.exports = {
  requestWeather
}
