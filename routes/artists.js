var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var rand = Math.floor((Math.random() * 2500) + 1);
	var db = req.db;
	var collection = db.get('artists');
	collection.find({},{ skip: rand, limit: 20 },function(e,docs) {

		res.render('artists', { "results" : docs });

	});

});

router.get('/:id', function(req, res, next) {

	res.render('artistdetails', { title: 'Artist Details' });

});

router.get('/:id', function(req, res) {

	var db = req.db;
    var collection = db.get('artists');
    collection.find({ 'id': parseInt(req.params.id) },{ limit: 1 },function(e,docs) {

			res.json(docs);

    });

});

module.exports = router;
