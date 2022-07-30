const { model, Schema, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating must be between 1 and 5'],
        max: [5, 'Rating must be between 1 and 5']
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters long']
    },
    owner: { type: ObjectId, ref: 'User'},
    item: { type: ObjectId, ref: 'Item'},
});

const Review = model('Review', schema);

module.exports = Review;