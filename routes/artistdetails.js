var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

	res.render('artistdetails', { title: 'Artist Details' });

});

module.exports = router;
