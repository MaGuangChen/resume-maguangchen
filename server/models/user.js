const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	acount: { type: String },
  password: { type: String },
	company: [{
		type: Schema.Types.ObjectId,
		ref: 'company'
	}],
	message: [{
		type: Schema.Types.ObjectId,
		ref: 'message'
  }],
  receiveMessage: [{
    type: Schema.Types.ObjectId,
    ref: 'receiveMessage'
  }]
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

UserSchema.statics.addMessage = function(id, text, time) {
  const Message = mongoose.model('message');

  return this.findById(id)
    .then(user => {
      const message = new Message({ text, time, user })
      user.message.push(message)
      return Promise.all([message.save(), user.save()])
        .then(([message, user]) => user);
    });
}

UserSchema.statics.findMessage = function(id) {
	return this.findById(id)
	  .populate('message')
	  .then(user => user.message);
}

UserSchema.statics.addReceiveMessage = function(id, text, time) {
  const ReceiveMessage = mongoose.model('receiveMessage');

  return this.findById(id)
    .then(user => {
      const receiveMessage = new ReceiveMessage({ text, time, user })
      user.receiveMessage.push(receiveMessage)
      return Promise.all([receiveMessage.save(), user.save()])
        .then(([receiveMessage, user]) => user);
    });
}

UserSchema.statics.findReceiveMessage = function(id) {
	return this.findById(id)
	  .populate('receiveMessage')
	  .then(user => user.receiveMessage);
}


mongoose.model('user', UserSchema);
