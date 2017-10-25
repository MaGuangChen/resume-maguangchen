const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	acount: { type: String },
  password: { type: String },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	companies: [{
		type: Schema.Types.ObjectId,
		ref: 'companies'
	}],
	message: [{
		type: Schema.Types.ObjectId,
		ref: 'message'
	}],
});

UserSchema.statics.addCompany = function(userId, name, position) {
	const Company = mongoose.model('company');
	return this.findById(userId)
	  .then(user => {
		const company = new Company({ userId, name, position })
		user.companies.push(company)
		return Promise.all([company.save(), user.save()])
		  .then(([company, user]) => user);
	  });
  }


UserSchema.statics.findCompany = function(id) {
	return this.findById(id)
	  .populate('companies')
	  .then(user => user.companies);
}

UserSchema.statics.findMessage = function(id) {
	return this.findById(id)
	  .populate('messages')
	  .then(user => user.message);
}


mongoose.model('user', UserSchema);
