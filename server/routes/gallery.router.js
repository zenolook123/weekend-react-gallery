const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// PUT Route
router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id
  const sqlText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE id = $1
  `

  pool.query(sqlText, [idToUpdate])
  .then((result) => {
    
    res.sendStatus(200)
  }).catch((err) => {
    alert('Error Updating likes')
    res.sendStatus(500)
  });
})

// GET Route
router.get("/", (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "likes" desc`;
  
    pool
      .query(sqlText)
      .then(result => {
        console.log("Database items are sent");
        res.send(result.rows);
      })
      .catch(err => {
        console.log(`Error making DB query, ${sqlText}`, err);
        res.sendStatus(500);
      });
  });// END GET Route

module.exports = router;