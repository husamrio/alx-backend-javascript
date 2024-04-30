const express = require('express');

// express const of da prog

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Stubs be similar

app.listen(port);

module.exports = app;
