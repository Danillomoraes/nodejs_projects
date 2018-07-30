//console.log('i dont know what im doing with my life');
const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const request =require('request');
const weather= require('./weather');


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


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    // console.log(JSON.stringify(results, undefined, 2));
    console.log(`Local: ${results.Address}`);
    weather.requestWeather(results, (error, results)=> {
      if (error) {
        console.log(error);
      }else {
        console.log(`Temperatura: ${results.Temperatura} °C`);
        console.log(`Sumario: ${results.Sumario}`);        
      }
    });
  }
});


// console.log(key);
