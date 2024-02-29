const express = require('express');

// express const
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Stubs are similar
app.listen(port);

module.exports = app;
