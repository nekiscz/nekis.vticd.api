const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MessageSchema = new Schema({
    type: String,
    text: String
});

module.exports = mongoose.model('messages', MessageSchema);