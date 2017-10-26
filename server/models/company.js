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
    reservationDate: {
        type: String
    },
    minSalary: {
        type: Number
    },
    maxSalary: {
        type: Number
    },
});



mongoose.model('company', CompanySchema);