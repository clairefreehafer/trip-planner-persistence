var Promise = require('bluebird');
var router = require('express').Router();
var db = require('../../models');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req, res, next) {
	Hotel.findAll().then(function(hotels) {
		var hotelList = hotels;
	}).then(function(hotelList) {
		hotelList.forEach(function(hotel) {
			$('#hotel-choices').append('<option>' + hotel.name + '</option>');
		});
	});
});

router.get('/restaurants', function(req, res, next) {
	Restaurant.findAll().then(function(restaurants) {
		res.json(restaurants);
	});
});

router.get('/activities', function(req, res, next) {
	Activity.findAll().then(function(activities) {
		res.json(activities);
	});
});

module.exports = router;
