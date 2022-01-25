const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist: { type: String, required: true, unique: true },
    songName: { type: String, required: true, unique: true }

}, {
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema);