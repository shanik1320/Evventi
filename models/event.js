const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    name: String,
    description: String,
    date:Date
});

module.exports = mongoose.model('event', Event);