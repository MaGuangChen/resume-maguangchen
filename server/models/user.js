const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	acount: { type: String },
    password: { type: String },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
});

mongoose.model('user', UserSchema);
