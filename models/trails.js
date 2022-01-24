const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    trailName: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard', 'Extreme']
    },
    distance: {
        type: Number
    },
    petAllowed: {
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
})