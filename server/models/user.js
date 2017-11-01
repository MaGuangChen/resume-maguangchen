const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  acount: { type: String },
  password: { type: String },
	company: [{
		type: Schema.Types.ObjectId,
		ref: 'company'
	}],
});

UserSchema.statics.addCompany = function(acount, name, position, 
  reservationDate, minSalary, maxSalary) {
  const Company = mongoose.model('company');

  return this.findOne({ acount: acount })
    .then(user => {
      const company = new Company({ name, position, 
        reservationDate, minSalary, maxSalary })
      user.company.push(company)
      return Promise.all([company.save(), user.save()])
        .then(([company, user]) => user);
    });
}

UserSchema.statics.findCompany = function(id) {
	return this.findById(id)
	  .populate('company')
	  .then(user => user.company);
}

mongoose.model('user', UserSchema);
