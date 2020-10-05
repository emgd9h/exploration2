const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fact = new Schema({
	name: { type: String, required: true },
	fact: { type: String, required: true },
});

module.exports = mongoose.model('Fact', Fact)

