const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const depart = require('./api/depart');
const arrival = require('./api/arrival');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/depart', (req, res) => {
  res.send(depart);
});

app.get('/api/arrival', (req, res) => {
  res.send(arrival);
});

app.post('/api/depart', (req, res) => {
  const flight = {
    id: Date.now(),
    number: req.body.flights.number,
    airoport: req.body.flights.airoport,
    aircraft: req.body.flights.aircraft,
    time: req.body.flights.time,
    departTime: req.body.flights.departTime,
    status: req.body.flights.status,
  };

  depart.push(flight);
  res.send(flight);
});

app.post('/api/arrival', (req, res) => {
  const flight = {
    id: Date.now(),
    number: req.body.flights.number,
    airoport: req.body.flights.airoport,
    aircraft: req.body.flights.aircraft,
    time: req.body.flights.time,
    departTime: req.body.flights.departTime,
    status: req.body.flights.status,
  };

  arrival.push(flight);
  res.send(flight);
});

app.delete('/api/depart/:id', (req, res) => {
  const index = depart.findIndex(el => el.id === req.params.id);
  depart.splice(index, 1);
  res.sendStatus(204);
});

app.delete('/api/arrival/:id', (req, res) => {
  const index = arrival.findIndex(el => el.id === req.params.id);
  arrival.splice(index, 1);
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
