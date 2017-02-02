var db = require('./_db');

var Sequelize = require('sequelize');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
	number: Sequelize.INTEGER
});

module.exports = Day;