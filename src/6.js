const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<!DOCTYPE html><html><body>Hello World!</body></html>');
}).listen(3000);
