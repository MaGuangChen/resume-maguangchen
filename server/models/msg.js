const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    text: { type: String },
    time: { type: String }
});

mongoose.model('msg', MsgSchema);