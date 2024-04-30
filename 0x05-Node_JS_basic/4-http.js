const http = require('http');

// find and get the prog

const hostname = '127.0.0.1';
const port = 1245;

// Regex integration testing the prog

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

module.exports = app;
