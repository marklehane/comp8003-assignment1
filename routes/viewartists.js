var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	res.render('artists', { title: 'Artist List', results:res });

});

module.exports = router;
