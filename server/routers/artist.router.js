const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/artist', (req, res) => {
  pool
    .query('SELECT * FROM "artist"')
    .then(function (dbResults) {
      console.log(dbResults.rows);
      res.send(dbResults.rows);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

router.post('/artist', (req, res) => {
  console.log(req.body);
  pool
    .query(
      `INSERT INTO "artist"
            ("name", "birthdate")
            VALUES 
            ('${req.body.name}', '${req.body.birthdate}')`
    )
    .then(function (dbResults) {
      console.log(dbResults.rows);
      res.send(dbResults.rows);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
