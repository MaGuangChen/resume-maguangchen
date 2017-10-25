const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: { type: String },
    time: { type: String }
});

mongoose.model('message', MessageSchema);