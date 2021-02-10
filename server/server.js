const express = require('express');
const bodyParser = require('body-parser');
// const pool = require('./modules/pool');

const songRouter = require('./routers/song.router');
const artistRouter = require('./routers/artist.router');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.use('/', songRouter);
app.use('/', artistRouter);

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

// TODO - Replace static content with a database tables
const artistList = [
  {
    name: 'Ella Fitzgerald',
    birthdate: '04-25-1917',
  },
  {
    name: 'Dave Brubeck',
    birthdate: '12-06-1920',
  },
  {
    name: 'Miles Davis',
    birthdate: '05-26-1926',
  },
  {
    name: 'Esperanza Spalding',
    birthdate: '10-18-1984',
  },
];
const songList = [
  {
    title: 'Take Five',
    length: '5:24',
    released: '1959-09-29',
  },
  {
    title: 'So What',
    length: '9:22',
    released: '1959-08-17',
  },
  {
    title: 'Black Gold',
    length: '5:17',
    released: '2012-02-01',
  },
];
