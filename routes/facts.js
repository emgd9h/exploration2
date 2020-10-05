const express = require('express');
const router = express.Router();
const fact = require('../controllers/facts');

router.get('/', function(req, res) {
	fact.index(req,res);
});

router.post('/addFact', function(req, res) {
	fact.create(req,res);
});

router.get('/getFact', function(req,res) {
	fact.list(req,res);
});

module.exports = router;



