var Game = require('../models/game1.js');

var apiController = {
	getGamesByConsole: function(req, res){
		var console = req.params.consolename;

		Game.find({consolename: console}, function(err, results){
			res.render('byconsole', {
				gameList: results,
				consolename: console
			});
		});
	}
};

module.exports = apiController;