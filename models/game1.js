var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
	productname: String,
	consolename: String,
	looseprice: Number,
	cibprice: Number,
	genre: String,
	releaseyear: String,
	inCollection: Number,
	inTradeList: Number,
	comments: [Number]
});

var Game = mongoose.model('Game', gameSchema);