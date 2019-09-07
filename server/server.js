const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const db = require('../database/database');

const app = express();
const port = 3003;

app.use(morgan('dev'));
app.use(cors());
app.use(compression());

app.use('/reservations/:id', express.static('public'));
app.use(express.static('public'));

app.get('/api/reservations/:id', (req, res) => {
  const { id } = req.params;
  db.Reservations.findOne({ listingId: id }).then((data) => res.send(data))
    .catch(() => {});
});

app.get('/api/reservations/prices/:id', (req, res) => {
  const { id } = req.params;
  db.Reservations.findOne({ listingId: id }).then((data) => res.send(data));
});


app.listen(port, () => console.log('Listening on port 3003'));
