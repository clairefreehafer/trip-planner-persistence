var db = require('./_db');
var Day = require('./dayModel');

var Sequelize = require('sequelize');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, { through: 'day_restaurant' });
Day.belongsToMany(Activity, { through: 'day_activity' });

module.exports = db;