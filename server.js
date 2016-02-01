'use strict';
const http = require('http');
const { PORT } = process.env;
console.log(process.env);

http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, {
    'Content-type': 'text/html'
});

  res.end('<h1>what up ma?</h1>');
}).listen(PORT, () => {
  console.log('Node.js started. Listening on port ${PORT}');
});
