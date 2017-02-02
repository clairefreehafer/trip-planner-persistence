var Promise = require('bluebird');
var router = require('express').Router();
var db = require('../../models');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/dayModel');


router.get('/:id', function(req, res, next) {
	Day.findOne({
		where: {
			id: req.params.id
		}
	}).then(function(day) {
		res.json(day);
	});
});

router.get('/', function(req, res, next) {
	Day.findAll({
		include: [Activity, Restaurant, Hotel]
	})
	.then (function(days) {
		res.send(days);
	})
});

router.delete('/:id', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		res.json(hotels);
	});
});

router.post('/', function(req, res, next) {
	Day.create(req.body).then(function(newDay) {
		res.json(newDay);
	})
});

router.post('/:id/restaurants', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.addRestaurant(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

router.delete('/:id/restaurants', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.removeRestaurant(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

router.post('/:id/hotel', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.addHotel(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

router.delete('/:id/hotel', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.removeHotel(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

router.post('/:id/activities', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.addActivity(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

router.delete('/:id/activities', function(req, res, next) {
	Day.findById(req.params.id)
	.then (function(day) {
		return day.removeActivity(req.body);
	})
	.then (function(param) {
		console.log(param);
	})
});

module.exports = router;
