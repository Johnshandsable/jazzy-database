const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/song', (req, res) => {
  pool
    .query('SELECT * FROM "song"')
    .then(function (dbResults) {
      console.log(dbResults.rows);
      res.send(dbResults.rows);
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

router.post('/song', (req, res) => {
  pool
    .query(
      `INSERT INTO "song"
            ("title", "length", "released")
            VALUES 
            ('${req.body.title}', '${req.body.length}', '${req.body.released}')`
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
