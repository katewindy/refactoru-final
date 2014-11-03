// var mongoose = require('mongoose');

var Game = function (consolename, productname, looseprice, cibprice, genre, id){
	this.consolename = consolename;
	this.productname = productname;
	this.looseprice = looseprice;
	this.cibprice = cibprice;
	this.genre = genre;
	this.id = id;
};

module.exports = Game;

// var gameSchema = mongoose.Schema({
// 	consolename: String,
// 	productname: String,
// 	looseprice: Number,
// 	cibprice: Number,
// 	genre: String,
// });

// module.exports = mongoose.model('game', gameSchema);