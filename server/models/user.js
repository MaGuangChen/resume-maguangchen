const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	company: {
		type: String,
	},
	position: {
		type: String,
	}
});

mongoose.model('user', UserSchema);