const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name: {
		type: String,
    },
    position: {
		type: String,
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
    location: {
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
});



mongoose.model('company', CompanySchema);