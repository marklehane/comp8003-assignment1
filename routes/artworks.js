var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var rand = Math.floor((Math.random() * 69000) + 1);
	var db = req.db;
	var collection = db.get('artworks');
	collection.find({},{ skip: rand, limit: 20 },function(e,docs) {

		res.render('artworks', { "results" : docs });

	});

});

router.get('/:id', function(req, res) {

	var db = req.db;
    var collection = db.get('artworks');
    collection.find({ 'id': parseInt(req.params.id) },{ limit: 1 },function(e,docs){

			res.render('artworkdetails', { "results" : docs });

    });

});

module.exports = router;
