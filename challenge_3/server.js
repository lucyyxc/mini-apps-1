const express = require('express');
const app = express();
const path = require('path');
const port = 3333;
const bodyparser = require('body-parser');
const db = require('./db/connection.js');

app.use(express.static('public'));

app.use(bodyparser.json());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})

app.post('/form1', (req, res) => {
  const form = req.body;
  db.connection.query(`INSERT INTO step1 (name, email, password) VALUES ('${form.name}', '${form.email}', '${form.password}')`,
  (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  }
  )
})

app.post('/form2', (req, res) => {
  const form2 = req.body;
  db.connection.query(`INSERT INTO step2 (addressline1, addressline2, city, state, zip, phone) VALUES ('${form2.addressline1}', '${form2.addressline2}', '${form2.city}', '${form2.state}', '${form2.zip}', '${form2.phone}')`,
  (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  }
  )
})

app.post('/form3', (req, res) => {
  const form3 = req.body;
  db.connection.query(`INSERT INTO step3 (card, date, CVV, zip) VALUES ('${form3.card}', '${form3.date}', '${form3.CVV}', '${form3.zip}')`,
  (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  }
  )
})