const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
    const sqlText = `SELECT * FROM "gallery"`;
  
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