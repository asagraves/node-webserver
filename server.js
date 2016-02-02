'use strict';
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(process.env);

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/hello') {

  } else if (req.url === '/random') {
  } else {

  }
})

app.get('/hello', (req, res) => {
  const msg = `<h1>hello world!</h1>
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
})



app.get('/random', (req, res) => {
  res.end(Math.random().toString());
});

//all means all verbs and '*' means everything
app.all('*', (req, res) => {
  res.writeHead(403);
  res.end('access denied!');
})


app.listen(PORT, () => {
  console.log(`Node.js started. Listening on port ${PORT}`);
});








