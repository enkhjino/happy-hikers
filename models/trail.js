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
    user: {
        type: Schema.Types.ObjectId, ref: "User",
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    trailName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Moderate', 'Challenging', 'Difficult', 'Extreme']
    },
    distance: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        enum: ['kms', 'miles']
    },

    petAllowed: {
        type: Boolean,
        default: false
    },
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model("Trail", trailSchema);
