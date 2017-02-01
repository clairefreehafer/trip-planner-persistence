var Promise = require('bluebird');
var router = require('express').Router();
var db = require('../../models');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models');

router.get('/:id', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.get('/', function(req, res, next) {
	console.log('hi')
});

router.delete('/:id', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.post('/:id', function(req, res, next) {
	console.log(Day)
	dayModule.create(req.params.id).then(function(newDay) {
		res.send('success');
	})
});

router.post('/:id/restaurants', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.delete('/:id/restaurants', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.post('/:id/hotel', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.delete('/:id/hotel', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.post('/:id/activities', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.delete('/:id/activities', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

module.exports = router;
