const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    userAcount: { type: String },
    text: { type: String },
    createdTime: { type: String },
    sendToUserAcount: { type: String },
});



mongoose.model('message', MessageSchema);