const express = require('express');
const db = require('../database/database');


const app = express();
const port = 3000;

app.use(express.static('../public'));

app.get('/api/reservations', (req, res) => {
  db.Reservations.findOne({}).then((data) => res.send(data))
    .catch(() => {});
});

app.get('/api/prices', (req, res) => {
  console.log('THIS GET IS WORKING');
  res.send('93');
});

app.listen(port, () => console.log('Listening on port 3000'));
