var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

	res.render('artworkdetails', { title: 'Artwork Details' });

});

module.exports = router;
