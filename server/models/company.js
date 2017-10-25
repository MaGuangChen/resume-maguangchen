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
    contactPeoplePhoneNumber: {
        type: String
    }
});

mongoose.model('companyList', CompanySchema);