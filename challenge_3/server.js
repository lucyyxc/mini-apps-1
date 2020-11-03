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

app.post('/submit', (req, res) => {
  const form = req.body;
  db.connection.query(`INSERT INTO step1 (name, email, password) VALUES ('${form.name}', '${form.email}', '${form.password}')`,
  (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  }
  )
})