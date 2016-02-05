'use strict';

const app = express();
const bodyParser = require('body-parser');
const upload = require('multer')({ dest: 'tmp/uploads' });
const request = require('request');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.locals.title = 'THE super cool app';

// app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.render('index', {
    date: new Date()
  });
});


app.get('/contact', (req, res) => {
  if ( req.query.name) {
    res.send('<h1>thanks for contacting</h1>');
  }
  res.render('contact')
});



app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send ({hello: 'world'});
});


app.get('/api/weather', (req, res) => {
  const url = 'http.example.com'
  request.get(url, (err, response, body) => {
    if (err) throw err;

    res.send(JSON.parse(body));
  });
});


app.post('/contact', (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  res.send('<h1>thanks for contacting us ${name}</h1>')

});


app.get('/sendphoto', (req, res) => {
  res.render('sendphoto');
});


app.post('/sendphoto', upload.single('image'), (req, res) => {
  res.send('<h1>thanks for sending photo</h1>')
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








