const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name: {
		type: String,
    },
    location: {
        type: String,
    },
	position: {
		type: String,
    },
    phoneNumber: {
        type: String,
    },
    contactPeople: {
        type: String
    },
    eMail: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    // company: [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'company'
	// }],
});

mongoose.model('company', CompanySchema);