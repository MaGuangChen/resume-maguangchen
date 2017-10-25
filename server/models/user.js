const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	acount: { type: String },
  password: { type: String },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	company: [{
		type: Schema.Types.ObjectId,
		ref: 'company'
	}],
	message: [{
		type: Schema.Types.ObjectId,
		ref: 'message'
	}],
});

UserSchema.statics.addCompany = function(id, name, position) {
  const Company = mongoose.model('company');

  return this.findById(id)
    .then(user => {
      const company = new Company({ name, position, user })
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

UserSchema.statics.findMessage = function(id) {
	return this.findById(id)
	  .populate('messages')
	  .then(user => user.message);
}


mongoose.model('user', UserSchema);
