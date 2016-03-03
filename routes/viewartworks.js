var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('artworks', { title: 'Artwork List' });
});

module.exports = router;
