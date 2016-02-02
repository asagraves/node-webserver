'use strict';
const http = require('http');
const PORT = process.env.PORT || 3000;
console.log(process.env);

http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (request.url === '/hello') {
    res.end('<h1>what up ma?</h1>');
} else if (req.url === '/random'); {
    re.end(Math.random().toString());
} else {
  res.end('access denied!');
}

}).listen(PORT, () => {
  console.log(`Node.js started. Listening on port ${PORT}`);
});
