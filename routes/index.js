var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var rand = Math.floor((Math.random() * 69000) + 1);
	var db = req.db;
	var collection = db.get('artworks');
	collection.find({},{ skip: rand, limit: 4 },function(e,docs) {

		res.render('index', { "artwork" : docs });

	});

});

module.exports = router;
