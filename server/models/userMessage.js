const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserMessageSchema = new Schema({
    userAcount: { type: String },
    message: [{
        type: Schema.Types.ObjectId,
        ref: 'message'
    }],
});

UserMessageSchema.statics.addMessage = function(userAcount, text, createdTime, sendToUserAcount) {
  const Message = mongoose.model('message');

  return this.findOne({ userAcount: userAcount })
    .then(userMessage => {
      const message = new Message({ text, createdTime, sendToUserAcount })
      userMessage.message.push(message)
      return Promise.all([message.save(), userMessage.save()])
        .then(([message, userMessage]) => userMessage);
    });
}

UserMessageSchema.statics.findMessage = function(id) {
	return this.findById(id)
	  .populate('message')
	  .then(userMessage => userMessage.message);
}

mongoose.model('userMessage', UserMessageSchema);