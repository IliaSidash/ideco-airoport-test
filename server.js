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

// app.get('/flights/:id', (req, res) => {
//   const flight = flights.filter(el => el.id === Number(req.params.id));
//   res.send(flight);
// });

// app.post('/flights', (req, res) => {
//   const flight = {
//     id: Date.now(),
//     airoport: req.body.airoport,
//   };

//   flights.push(flight);
//   res.send(flight);
// });

// app.put('/flights/:id', (req, res) => {
//   const flight = flights.find(el => el.id === Number(req.params.id));
//   flight.airoport = req.body.airoport;
//   res.send(flights);
// });

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
