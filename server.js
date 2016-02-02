'use strict';
const http = require('http');
const PORT = process.env.PORT || 3000;
console.log(process.env);

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/hello') {
    const msg = `<h1>hello world</h1>
    <h2>goobye world</h2>
    `;
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      let time = 1000;

    msg.split('').forEach((char, i) => {
      setTimeout(() => {
      res.write(char);
     }, 1000 * i);
    });

      setTimeout(() => {
        res.end();
      }, 20000);

  } else if (req.url === '/random') {
    res.end(Math.random().toString());
  } else {
    res.writeHead(403);
    res.end('access denied!');
  }


}).listen(PORT, () => {
  console.log(`Node.js started. Listening on port ${PORT}`);
});
