const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port - process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method}, ${req.url}`
  console.log(log);

  fs.appendFile('server.log', log +'\n', (err)=> {
    if (err) {
      console.log('unable to append to server.log');
    }
  })

  next();
});

hbs.registerHelper('getcurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screanIt', (text) => {
  return text
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'dont break my heart',
    currentYear: new Date().getFullYear()
  })
});

app.get('/bad', (req, res) => {
  res.send({
    errosMessage: "unable to feed"
  })
})



app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
