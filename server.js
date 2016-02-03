'use strict';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Super cool app',
    date: new Date()
  });
});


app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  const msg = `<h1>Hello ${name}!</h1>
<h2>goodbye ${name}!</h2>`;

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

    msg.split('').forEach((char, i) => {
      setTimeout(() => {
      res.write(char);
     }, 1000 * i);
    });

      setTimeout(() => {
        res.end();
      }, msg.length * 1000 + 2000);
});




// app.get('/cal', (req, res) => {
//   const month = require ('node-cal/lib/month');
//   console.log(month);
// });




app.get('/random', (req, res) => {
  res.send(Math.random().toString());
});
app.get('/random/:min/:max', req, res => {
})
  const min = req.params.min;
  const max = req.params.max;
});

//all means all verbs and '*' means everything
// app.all('*', (req, res) => {
//   res
//     .status(403)
//     .send('access denied!');
// })


app.listen(PORT, () => {
  console.log(`Node.js started. Listening on port ${PORT}`);
});








