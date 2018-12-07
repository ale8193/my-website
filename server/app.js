const express = require('express');
const path = require('path');
const app = express();

const port = 80;

console.log(path.join(__dirname, '..', 'build'))
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

console.log(`Listeing on port ${port}`)
app.listen(port);