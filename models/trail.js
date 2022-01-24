const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    // Will add and maintain
    // createdAt & updatedAt properties
    timestamps: true
});

const trailSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    trailName: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Moderate', 'Challenging', 'Difficult', 'Extreme']
    },
    distance: {
        type: Number,
        enum: ['km', 'miles']
    },
    petAllowed: {
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model("Trail", trailSchema);
