const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceviceMessageSchema = new Schema({
    text: { type: String },
    time: { type: String }
});

mongoose.model('receiveMessage', ReceviceMessageSchema);