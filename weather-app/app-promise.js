//console.log('i dont know what im doing with my life');
const yargs = require('yargs');
// const axios = require('axios');
const axios =require ('axios-https-proxy-fix');
const fs = require('fs');
const https = require('https');

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

const proxy = {proxy: {
  host: 'iraque.cptm.info',
  port: '80',
  auth: {
    username: 'CPTM%5Cdanillom',
    password: 'Cptm0004'
  }
}};

var encdAddress = encodeURIComponent(argv.address);
var key = fetchKey().key;
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encdAddress}&key=${key}`

axios.get(url, proxy).then((response) => {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('unable to find address');
  }

  var long = response.data.results[0].geometry.location.lng;
  var late = response.data.results[0].geometry.location.lat;
  var fortaddr = response.data.results[0].formatted_address;
  var darkSecret = "c5876f20dbf92c97d78eb1425601206f";
  var url = `https://api.darksky.net/forecast/${darkSecret}/${late},${long}?lang=pt&si=temperature`;

  console.log(fortaddr);

  return axios.get(url, proxy).then((response) => {
    var temp =  response.data.currently.temperature;
    var summ = response.data.hourly.data[0].summary;
    console.log(`Temperatura: ${temp}`);
    console.log(`Sumario: ${summ}`);
  })
  // console.log(response.data);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('unable to connect to api server');
  }else {
    console.log(e);
  }
});
