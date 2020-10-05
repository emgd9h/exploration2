const path = require('path');
const Fact = require('../models/facts');

exports.index = function (req, res) {
	res.sendFile(path.resolve('views/facts.html'));
};

exports.create = function (req,res){
	var newFact = new Fact(req.body);
	console.log(req.body);
	newFact.save(function (err) {
		if(err){
			res.status(400).send('Unable to save Fact to database');
		} else{
			res.redirect('/facts/getFact');
		}
	});
};

exports.list = function (req,res) {
	Fact.find({}).exec(function (err, facts) {
		if (err) {
			return res.send(500, err);
		}
		res.render('getFact', {
			facts: facts
		});
	});
};


