const Review = require('../models/Review');
const Item = require('../models/Item');

async function getAllReviewsByItemId(itemId) {
    return Review.find({ item: { $in: itemId } });
}

async function create(review, itemId) {
    const result = new Review(review);
    await result.save();
    await Item.updateOne({ _id: itemId }, { $addToSet: { reviews: review } })
    return result;
}

async function deleteById(reviewId, itemId) {
    const review = Review.findById(reviewId);
    await Review.findByIdAndDelete(reviewId);
    await Item.updateOne({ _id: itemId }, { $pull: { reviews: review } })
}

module.exports = {
    getAllReviewsByItemId,
    create,
    deleteById
};