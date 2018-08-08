const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
