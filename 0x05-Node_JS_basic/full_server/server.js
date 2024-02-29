const express = require('express');
const router = require('./routes/index');

// mocha using
const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port);

module.exports = app;
